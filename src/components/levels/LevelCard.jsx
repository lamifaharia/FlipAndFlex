import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLock,
  FaStar,
  FaPlay,
} from "react-icons/fa";

export default function LevelCard({
  level,
  unlocked,
  score,
}) {
  const completed = !!score;

  const getStyle = () => {
    if (completed) {
      return `
      from-green-400
      to-emerald-600
      border-green-300
      shadow-green-500/40
      `;
    }

    if (unlocked) {
      return `
      from-purple-500
      via-pink-500
      to-cyan-400
      border-purple-300
      shadow-purple-500/40
      `;
    }

    return `
      from-gray-700
      to-gray-900
      border-gray-700
      shadow-black/40
      opacity-60
    `;
  };

  const CardContent = (
    <motion.div
      whileHover={
        unlocked
          ? {
              y: -8,
              scale: 1.06,
            }
          : {}
      }
      whileTap={
        unlocked
          ? {
              scale: 0.95,
            }
          : {}
      }
      className={`
        relative
        w-32
        h-40
        rounded-3xl
        bg-gradient-to-br
        ${getStyle()}
        border-2
        shadow-2xl
        overflow-hidden
        flex
        flex-col
        items-center
        justify-between
        py-4
        transition-all
      `}
    >
      {/* Shine */}

      <motion.div
        animate={{ x: [-180, 180] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="absolute w-10 h-48 bg-white/20 rotate-12 blur-sm"
      />

      {/* Level */}

      <h2 className="relative z-10 text-2xl font-black text-white">
        {unlocked ? `Level ${level.id}` : <FaLock />}
      </h2>

      {/* Stars */}

      {completed ? (
        <div className="flex gap-1 relative z-10">
          {[1, 2, 3].map((star) => (
            <FaStar
              key={star}
              className={
                star <= score.stars
                  ? "text-yellow-400"
                  : "text-white/20"
              }
            />
          ))}
        </div>
      ) : (
        <div className="h-5" />
      )}

      {/* Best Score */}

      {completed ? (
        <div className="text-center text-xs text-white/80 relative z-10 leading-5">
          <p>🎯 {score.moves} Moves</p>
          <p>⏱ {score.time}s</p>
        </div>
      ) : (
        <div className="text-xs text-white/50 relative z-10">
          {unlocked ? "Ready" : "Locked"}
        </div>
      )}

      {/* Button */}

      <div className="relative z-10">
        {unlocked ? (
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <FaPlay className="text-white text-sm ml-1" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
            <FaLock className="text-white/70" />
          </div>
        )}
      </div>
    </motion.div>
  );

  if (unlocked) {
    return (
      <Link to={`/game/${level.id}`}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}