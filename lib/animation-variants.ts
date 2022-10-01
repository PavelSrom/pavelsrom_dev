import { Variants } from 'framer-motion'

export const popVariants: Variants = {
  hidden: {
    scale: 0,
    y: 256,
  },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
}

export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 64,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const slideHorizontalVariants = (
  position: 'left' | 'right'
): Variants => ({
  hidden: {
    opacity: 0,
    x: position === 'left' ? 64 : -64,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
})
