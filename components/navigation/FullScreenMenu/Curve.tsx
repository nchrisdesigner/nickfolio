import { AnimatePresence, motion } from "framer-motion"

export default function Curve() {
  const curve = {
    enter: {
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    // exit: {
    //   d: initialPath,
    //   transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    // },
  };
  return (
    <>
      <AnimatePresence>
        <svg className="absolute top-0 -left-[99px] w-[100px] h-full stroke-none fill-background">
          <motion.path
            variants={curve}
            initial="initial"
            animate="enter"
            // exit="exit"
          ></motion.path>
        </svg>
      </AnimatePresence>
    </>

  );
}