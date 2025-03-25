import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      )
    }

    const showCursor = () => setIsVisible(true)
    const hideCursor = () => setIsVisible(false)

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseenter', showCursor)
    window.addEventListener('mouseleave', hideCursor)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseenter', showCursor)
      window.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className={`w-2 h-2 rounded-full bg-primary ${
          isPointer ? 'bg-opacity-50' : 'bg-opacity-100'
        }`} />
      </motion.div>

      {/* Cursor trail */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-40 mix-blend-difference"
          animate={{
            x: position.x - 8,
            y: position.y - 8,
            scale: isPointer ? 1.2 : 0.8,
          }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 15,
            mass: 0.1,
            delay: i * 0.02,
          }}
        >
          <div
            className={`w-4 h-4 rounded-full bg-primary bg-opacity-${
              20 - i * 4
            }`}
            style={{
              filter: `blur(${i * 2}px)`,
            }}
          />
        </motion.div>
      ))}
    </>
  )
}