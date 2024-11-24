"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber"
import { Float, Effects } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Vector3, BufferGeometry, BufferAttribute, LineSegments, LineBasicMaterial, Points, PointsMaterial } from "three"
import * as THREE from 'three'

function createPyramidGeometry() {
  const pyramidGeometry = new BufferGeometry()
  const originalHeight = 0.5
  const reducedHeight = originalHeight * 0.97 * 0.97
  const vertices = new Float32Array([
    -0.5, -0.5, 0.5,
    0.5, -0.5, 0.5,
    0, reducedHeight, 0,
    0.5, -0.5, 0.5,
    0.5, -0.5, -0.5,
    0, reducedHeight, 0,
    0.5, -0.5, -0.5,
    -0.5, -0.5, -0.5,
    0, reducedHeight, 0,
    -0.5, -0.5, -0.5,
    -0.5, -0.5, 0.5,
    0, reducedHeight, 0,
    -0.5, -0.5, 0.5,
    0.5, -0.5, 0.5,
    0.5, -0.5, -0.5,
    -0.5, -0.5, -0.5,
  ])
  const indices = new Uint16Array([
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
    9, 10, 11,
    12, 13, 14, 12, 14, 15
  ])
  pyramidGeometry.setAttribute('position', new BufferAttribute(vertices, 3))
  pyramidGeometry.setIndex(new BufferAttribute(indices, 1))
  pyramidGeometry.computeVertexNormals()
  return pyramidGeometry
}

function Pyramid() {
  const pyramidGeometry = useMemo(() => createPyramidGeometry(), [])
  const faceMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
  })

  return (
    <group>
      <mesh geometry={pyramidGeometry} material={faceMaterial} />
      <lineSegments geometry={new THREE.EdgesGeometry(pyramidGeometry)}>
        <lineBasicMaterial color={0xffffff} linewidth={2} />
      </lineSegments>
    </group>
  )
}

function createCubeEdges() {
  const size = 0.2
  const halfSize = size / 2
  const vertices = new Float32Array([
    // Front face
    -halfSize, -halfSize, halfSize,
    halfSize, -halfSize, halfSize,
    halfSize, -halfSize, halfSize,
    halfSize, halfSize, halfSize,
    halfSize, halfSize, halfSize,
    -halfSize, halfSize, halfSize,
    -halfSize, halfSize, halfSize,
    -halfSize, -halfSize, halfSize,
    // Back face
    -halfSize, -halfSize, -halfSize,
    halfSize, -halfSize, -halfSize,
    halfSize, -halfSize, -halfSize,
    halfSize, halfSize, -halfSize,
    halfSize, halfSize, -halfSize,
    -halfSize, halfSize, -halfSize,
    -halfSize, halfSize, -halfSize,
    -halfSize, -halfSize, -halfSize,
    // Connecting edges
    -halfSize, -halfSize, halfSize,
    -halfSize, -halfSize, -halfSize,
    halfSize, -halfSize, halfSize,
    halfSize, -halfSize, -halfSize,
    halfSize, halfSize, halfSize,
    halfSize, halfSize, -halfSize,
    -halfSize, halfSize, halfSize,
    -halfSize, halfSize, -halfSize
  ])

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(vertices, 3))
  return geometry
}

function FloatingCube({ position, index }: { position: [number, number, number], index: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const initialPosition = useRef(new Vector3(...position))

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      groupRef.current.position.y = initialPosition.current.y + Math.sin(time * (0.25 + index * 0.05) + index) * 0.1
      groupRef.current.position.x = initialPosition.current.x + Math.sin(time * (0.15 + index * 0.025) + index * 2) * 0.05
      groupRef.current.position.z = initialPosition.current.z + Math.cos(time * (0.2 + index * 0.035) + index * 3) * 0.05
      groupRef.current.rotation.x += 0.005 * (index % 2 ? 1 : -1)
      groupRef.current.rotation.y += 0.005 * (index % 3 ? 1 : -1)
      groupRef.current.rotation.z += 0.005 * (index % 5 ? 1 : -1)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        <mesh>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshBasicMaterial color="black" />
        </mesh>
        <lineSegments geometry={createCubeEdges()}>
          <lineBasicMaterial color={0xffffff} linewidth={2} />
        </lineSegments>
      </group>
    </Float>
  )
}

function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 1000

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [particleCount])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime * 0.1 + i * 0.1) * 0.01
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={0xffffff}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

function RotatingCamera() {
  const { camera } = useThree()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const radius = 5
    const horizontalSpeed = 0.1
    const verticalSpeed = 0.15
    const verticalAmplitude = 1.5
    const baseHeight = 2

    camera.position.x = Math.sin(t * horizontalSpeed) * radius
    camera.position.z = Math.cos(t * horizontalSpeed) * radius
    camera.position.y = Math.sin(t * verticalSpeed) * verticalAmplitude + baseHeight

    camera.lookAt(0, 0, 0)
  })

  return null
}

function generateCubePositions(count: number, minDistance: number): [number, number, number][] {
  const positions: [number, number, number][] = []
  const pyramidHeight = 1.5
  const pyramidRadius = 1

  for (let i = 0; i < count; i++) {
    let x: number = 0, y: number = 0, z: number = 0
    let tooClose = true

    while (tooClose) {
      x = (Math.random() - 0.5) * 8
      y = (Math.random() - 0.5) * 8
      z = (Math.random() - 0.5) * 8

      // Check if the cube is outside the pyramid
      const distanceFromCenter = Math.sqrt(x * x + z * z)
      const heightAtDistance = (pyramidHeight / pyramidRadius) * (pyramidRadius - distanceFromCenter)
      
      if (y > heightAtDistance || distanceFromCenter > pyramidRadius) {
        // Check distance from other cubes
        tooClose = positions.some(pos => 
          Math.sqrt(Math.pow(pos[0] - x, 2) + Math.pow(pos[1] - y, 2) + Math.pow(pos[2] - z, 2)) < minDistance
        )
      }
    }

    positions.push([x, y, z])
  }

  return positions
}

export default function PyramidScene() {
  const cubeCount = Math.floor(Math.random() * 3) + 16 // Random number between 16 and 18
  const cubePositions = useMemo(() => generateCubePositions(cubeCount, 0.5), [cubeCount])

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ParticleSystem />
      <Pyramid />
      {cubePositions.map((position, index) => (
        <FloatingCube
          key={index}
          position={position}
          index={index}
        />
      ))}
      <RotatingCamera />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  )
}