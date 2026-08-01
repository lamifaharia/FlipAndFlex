import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;

    const newRipple = {
      id: Date.now(),
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    onClick?.(e);
  };

  return (
    <motion.button
      type={type}
      whileHover={{
        scale: 1.05,
        y: -4,
        boxShadow:
          "0 0 25px rgba(124,58,237,.85), 0 0 50px rgba(236,72,153,.5)",
      }}
      whileTap={{
        scale: 0.93,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={handleClick}
      className={`
        game-btn
        neon-border
        relative
        overflow-hidden
        font-bold
        rounded-full
        px-10
        py-4
        text-lg
        isolate
        ${className}
      `}
    >
      {/* Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full bg-white/60 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Label sits above ripple layer */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}