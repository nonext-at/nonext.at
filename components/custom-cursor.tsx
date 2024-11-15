'use client'

import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const springConfig = { mass: 1, tension: 150, friction: 26 }
  const trail = useSpring({
    to: { x: position.x, y: position.y },
    config: springConfig,
  })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition)

    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference">
      <animated.div
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
        style={{
          left: trail.x,
          top: trail.y,
        }}
      />
    </div>
  )
}