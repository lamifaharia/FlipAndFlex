import { motion } from "framer-motion";

import logo from "../assets/images/foxzoid-logo.png";

export default function Loading() {
  return (
    <section className="fixed inset-0 bg-[#070812] flex items-center justify-center overflow-hidden">
      {/* Cyan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1.4, 1.1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[180px]"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Foxzoid Game Studio"
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -5,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.04, 1],
            rotate: 0,
          }}
          transition={{
            duration: 1,
            scale: {
              repeat: Infinity,
              duration: 2,
            },
          }}
          className="w-72 md:w-96 drop-shadow-[0_0_40px_rgba(34,211,238,.35)]"
        />

        {/* Studio Name */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl font-bold text-white tracking-wide"
        >
          FOXZOID GAME STUDIO
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
          className="mt-2 text-white/60"
        >
          Initializing Game...
        </motion.p>

        {/* Loading Dots */}
        <div className="flex gap-3 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className="w-3 h-3 rounded-full bg-cyan-400"
            />
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-xs tracking-[0.35em] uppercase text-white/40 text-center"
        >
          Powered by Foxzoid Game Studio LLP
        </motion.p>

      </div>
    </section>
  );
}