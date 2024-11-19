"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function SpinningPyramid() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(200, 200)
    mountRef.current.appendChild(renderer.domElement)

    // Create custom geometry for pyramid without bottom
    const geometry = new THREE.BufferGeometry()
    const vertices = new Float32Array([
      // Front face
      0, 1, 0,
      -1, -1, 1,
      1, -1, 1,
      // Right face
      0, 1, 0,
      1, -1, 1,
      1, -1, -1,
      // Back face
      0, 1, 0,
      1, -1, -1,
      -1, -1, -1,
      // Left face
      0, 1, 0,
      -1, -1, -1,
      -1, -1, 1
    ])
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    })
    const pyramid = new THREE.Mesh(geometry, material)

    scene.add(pyramid)
    camera.position.z = 3

    const animate = () => {
      requestAnimationFrame(animate)
      pyramid.rotation.x += 0.01
      pyramid.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-[200px] h-[200px] mx-auto" />
}