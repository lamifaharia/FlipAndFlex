import { motion } from "framer-motion";
import { FaLock, FaStar } from "react-icons/fa";

export default function LevelCard({ level }) {
  // Later we'll replace these with saved progress
  const completed = false;
  const current = level.id === 1;
  const locked = level.id > 1;

  const getStyle = () => {
    if (completed) {
      return `
      from-green-400
      to-emerald-600
      border-green-300
      shadow-green-400/40
      `;
    }

    if (current) {
      return `
      from-purple-500
      via-pink-500
      to-cyan-400
      border-purple-300
      shadow-purple-500/50
      `;
    }

    return `
      from-gray-700
      to-gray-800
      border-gray-600
      shadow-black/40
    `;
  };

  return (
    <motion.div
      whileHover={
        !locked
          ? {
              y: -8,
              scale: 1.08,
            }
          : {}
      }
      whileTap={
        !locked
          ? {
              scale: 0.92,
            }
          : {}
      }
      animate={
        current
          ? {
              scale: [1, 1.08, 1],
            }
          : {}
      }
      transition={{
        duration: 0.6,
        repeat: current ? Infinity : 0,
      }}
      className={`
        relative
        w-24
        h-24
        rounded-3xl
        bg-gradient-to-br
        ${getStyle()}
        border-2
        shadow-2xl
        flex
        items-center
        justify-center
        overflow-hidden
        transition-all
      `}
    >
      {/* Shine */}
      <motion.div
        animate={{
          x: [-140, 140],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="
          absolute
          w-12
          h-40
          rotate-12
          bg-white/20
          blur-sm
        "
      />

      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-white/5" />

      {/* Number / Lock */}
      <div className="relative z-10">
        {locked ? (
          <FaLock className="text-2xl text-gray-300" />
        ) : (
          <span className="text-3xl font-black text-white">
            {level.id}
          </span>
        )}
      </div>

      {/* Completed Star */}
      {completed && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            absolute
            -top-2
            -right-2
            w-8
            h-8
            rounded-full
            bg-yellow-400
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <FaStar className="text-yellow-900 text-sm" />
        </motion.div>
      )}

      {/* Current Badge */}
      {current && (
        <motion.div
          animate={{
            opacity: [1, 0.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
          className="
            absolute
            bottom-1
            text-[10px]
            font-bold
            tracking-wider
            text-white
          "
        >
          PLAY
        </motion.div>
      )}
    </motion.div>
  );
}