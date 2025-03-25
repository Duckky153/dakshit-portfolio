import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterEffectProps {
  words: string[]
  className?: string
  delay?: number
  cursor?: boolean
}

export function TypewriterEffect({
  words,
  className = '',
  delay = 3000,
  cursor = true,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const currentWord = words[currentWordIndex]
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        timeout = setTimeout(() => {}, 500) // Pause before typing next word
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 50)
      }
    } else {
      if (currentText === currentWord) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delay)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, 100)
      }
    }
    
    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, delay])
  
  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-0.5 h-5 ml-1 bg-primary"
        />
      )}
    </span>
  )
}