import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <motion.button
      type={type}
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className={`
        game-btn
        font-bold
        rounded-full
        px-10
        py-4
        text-lg
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}