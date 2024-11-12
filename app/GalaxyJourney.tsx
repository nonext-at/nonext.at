'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { Button } from "@/components/ui/button"

function getRandomBranches() {
  return Math.floor(Math.random() * 4) + 5; // Random number between 5 and 8
}

function getRandomColor() {
  return new THREE.Color().setHSL(Math.random(), 0.7, 0.5)
}

function Galaxy({ count = 2000, size = 0.03, radius = 5, spin = 1, randomness = 0.2, randomnessPower = 3, position = [0, 0, 0], color = 0xffffff, rotation = [0, 0, 0], isSpiral = true }) {
  const points = useRef()
  const branches = useMemo(() => getRandomBranches(), [])
  const [positions, colors, opacities] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const opacities = new Float32Array(count)
    const baseColor = new THREE.Color(color)
    const colorVariation = 0.2

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      let r, theta, phi

      if (isSpiral) {
        r = Math.random() * radius
        const branchAngle = ((i % branches) / branches) * Math.PI * 2
        const spinAngle = r * spin

        const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
        const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
        const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1)

        positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX * randomness * radius
        positions[i3 + 1] = randomY * randomness * radius
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ * randomness * radius
      } else {
        r = Math.random() * radius
        theta = Math.random() * Math.PI * 2
        phi = Math.acos(2 * Math.random() - 1)

        positions[i3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6 // Flatten vertically
        positions[i3 + 2] = r * Math.cos(phi)
      }

      const mixedColor = baseColor.clone()
      mixedColor.setHSL(
        mixedColor.getHSL({ h: 0, s: 0, l: 0 }).h + (Math.random() * 2 - 1) * colorVariation,
        0.7 + Math.random() * 0.3,
        0.3 + r / radius * 0.7
      )
      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b

      opacities[i] = Math.random() * 0.5 + 0.5 // Random opacity between 0.5 and 1
    }

    return [positions, colors, opacities]
  }, [count, radius, branches, spin, randomness, randomnessPower, color, isSpiral])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    //@ts-ignore
    points.current.rotation.y = time * 0.05
  })

  return (
    //@ts-ignore
    <group position={position} rotation={rotation}> 
      <points ref={points as any}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-opacity"
            count={opacities.length}
            array={opacities}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={size} 
          sizeAttenuation={true} 
          depthWrite={false} 
          vertexColors={true} 
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0.8}
          //@ts-ignore
          vertexOpacity={true}
        />
      </points>
      {!isSpiral && <pointLight color={color} intensity={2} distance={20} />}
    </group>
  )
}

function CentralGalaxy() {
  return (
    <Galaxy 
      count={40000}
      size={0.007}
      radius={30}
      spin={0.5}
      randomness={2}
      randomnessPower={3}
      position={[0, 0, 0]}
      color={0x800080}
      rotation={[Math.PI / 6, 0, 0]}
      isSpiral={true}
    />
  )
}

function BackgroundParticles({ count = 50000, size = 0.01, radius = 100 }) {
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = r * Math.cos(phi)

      const color = new THREE.Color().setHSL(Math.random(), 0.5, 0.5)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return [positions, colors]
  }, [count, radius])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.5}
      />
    </points>
  )
}

function Scene() {
  const galaxies = useMemo(() => {
    const galaxyData = []
    for (let i = 0; i < 60; i++) {
      const isSpiral = Math.random() > 0.3
      const distance = Math.random() * 50 + 15
      const angle = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * 40
      const galaxySize = Math.random() * 3 + 2

      galaxyData.push({
        position: [
          Math.cos(angle) * distance,
          height,
          Math.sin(angle) * distance
        ],
        color: getRandomColor().getHex(),
        radius: galaxySize,
        spin: (Math.random() - 0.5) * 3,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        isSpiral,
        size: 0.03 * (1 - distance / 60) * (galaxySize / 3.5)
      })
    }
    return galaxyData
  }, [])

  return (
    <>
      <BackgroundParticles />
      <CentralGalaxy />
      {galaxies.map((galaxy, index) => (
        <Galaxy 
          key={index}
          position={galaxy.position}
          color={galaxy.color}
          radius={galaxy.radius}
          spin={galaxy.spin}
          rotation={galaxy.rotation}
          isSpiral={galaxy.isSpiral}
          size={galaxy.size}
          count={Math.max(100, Math.floor(2000 * (galaxy.radius / 3.5) * (1 - Math.sqrt(galaxy.position[0]**2 + galaxy.position[1]**2 + galaxy.position[2]**2) / 65)))}
        />
      ))}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

function CinematicCamera() {
  const { camera } = useThree()
  const curvePoints = useMemo(() => [
    new THREE.Vector3(-40, 20, 40),
    new THREE.Vector3(30, -10, 30),
    new THREE.Vector3(20, 15, -20),
    new THREE.Vector3(-30, -5, -30),
    new THREE.Vector3(0, 20, -20),
    new THREE.Vector3(20, -15, 10),
    new THREE.Vector3(-20, 10, 30),
    new THREE.Vector3(0, 0, 0)
  ], [])

  const curve = useMemo(() => new THREE.CatmullRomCurve3(curvePoints, true), [curvePoints])

  const cameraRef = useRef(new THREE.Vector3())
  const lookAtRef = useRef(new THREE.Vector3())

  useFrame((state) => {
    const t = (state.clock.getElapsedTime() * 0.01) % 1
    const position = curve.getPointAt(t)
    const lookAhead = curve.getPointAt((t + 0.01) % 1)
    
    cameraRef.current.lerp(position, 0.1)
    lookAtRef.current.lerp(lookAhead, 0.1)
    
    camera.position.copy(cameraRef.current)
    camera.lookAt(lookAtRef.current)
  })

  return null
}

export default function Component() {
  const [isAnimating, setIsAnimating] = useState(true)

  return (
    <div className="relative w-full h-screen">
      <Canvas>
        <color attach="background" args={['#000']} />
        <PerspectiveCamera makeDefault position={[0, 0, 80]} fov={75} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Scene />
        {isAnimating ? <CinematicCamera /> : <OrbitControls />}
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-4 text-white">
        <div className="flex justify-center">
          <Button onClick={() => setIsAnimating(!isAnimating)}>
            {isAnimating ? 'Stop Animation' : 'Start Animation'}
          </Button>
        </div>
      </div>
    </div>
  )
}