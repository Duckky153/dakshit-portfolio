import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80" />
      
      {/* 3D AI Brain */}
      <div className="absolute inset-0 w-full h-full">
        <Spline 
          scene="https://prod.spline.design/your-ai-brain-url" 
          className="w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Dakshit Raj
          </h1>
          <TypewriterEffect 
            words={[
              'AI Developer',
              'Machine Learning Engineer',
              'Deep Learning Specialist',
              'Neural Network Architect'
            ]}
            className="text-xl md:text-2xl text-gray-300"
          />
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <button className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300">
            Explore My Work
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}