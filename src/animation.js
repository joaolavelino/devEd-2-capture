export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
