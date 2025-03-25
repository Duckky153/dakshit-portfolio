export const models = {
  // Main hero section AI brain model
  aiBrain: {
    splineUrl: 'https://prod.spline.design/your-ai-brain-model-url',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    interactions: {
      hover: 'rotate',
      click: 'explode',
      scroll: 'float'
    }
  },
  
  // Skill section icons
  skillIcons: {
    ai: 'https://prod.spline.design/your-ai-icon-url',
    ml: 'https://prod.spline.design/your-ml-icon-url',
    deepLearning: 'https://prod.spline.design/your-deep-learning-icon-url',
    python: 'https://prod.spline.design/your-python-icon-url',
    tensorflow: 'https://prod.spline.design/your-tensorflow-icon-url',
    pytorch: 'https://prod.spline.design/your-pytorch-icon-url'
  },
  
  // Project cards
  projectCards: {
    aiProject1: {
      model: 'https://prod.spline.design/your-project1-url',
      preview: '/images/projects/ai-project1.png'
    },
    aiProject2: {
      model: 'https://prod.spline.design/your-project2-url',
      preview: '/images/projects/ai-project2.png'
    },
    aiProject3: {
      model: 'https://prod.spline.design/your-project3-url',
      preview: '/images/projects/ai-project3.png'
    }
  },
  
  // Interactive background elements
  particles: {
    neurons: 'https://prod.spline.design/your-neurons-url',
    connections: 'https://prod.spline.design/your-connections-url'
  }
}