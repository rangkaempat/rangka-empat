// Motions for animations

// ===========================
// Infinite Looping Animation
// ===========================

export const infiniteLoop = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

// ===========================
// Standard Parent Container
// ===========================

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// ===========================
// Standard Children Animations
// ===========================

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInWithEase = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ===========================
// Popping Animation
// ===========================

// Parent
export const popContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Adjust as needed
      delayChildren: 0.1,
    },
  },
};

// Child
export const popItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.175, 0.885, 0.32, 1.275], // easeOutBack for a bounce/pop effect
    },
  },
};
