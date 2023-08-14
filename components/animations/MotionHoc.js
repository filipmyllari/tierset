import { motion } from "framer-motion";

const MotionHoc = (
  Component,
  customInitial = { y: 500 },
  customAnimate = {
    y: 0,
    transition: { duration: 0.5, type: "spring" },
  },
  customExit = {
    y: -500,
    transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
  }
) => {
  const WrappedComponent = (props) => (
    <motion.div initial={customInitial} animate={customAnimate} exit={customExit}>
      <Component {...props} />
    </motion.div>
  );

  WrappedComponent.displayName = `MotionHoc(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
};

export default MotionHoc;
