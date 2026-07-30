import { Link } from "react-router-dom";
import { FaLock, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const LevelCard = ({ level, unlocked, completed }) => {
  const baseStyle =
    "aspect-square rounded-2xl flex items-center justify-center text-2xl font-bold transition-all";

  if (!unlocked) {
    return (
      <div
        className={`${baseStyle} bg-slate-700 text-slate-400 cursor-not-allowed`}
      >
        <FaLock />
      </div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={`/game/${level.id}`}
        className={`${baseStyle}
        ${
          completed
            ? "bg-green-500 text-white"
            : "bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 text-white"
        }`}
      >
        {completed ? <FaCheck /> : level.id}
      </Link>
    </motion.div>
  );
};

export default LevelCard;