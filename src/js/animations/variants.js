export const rotate180DegVariants = {
  rotate: { rotate: [0, -180], transition: { duration: 0.3 } },
  stop: { rotate: 0 },
};

export const scaleYVariants = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
