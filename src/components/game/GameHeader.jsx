import { FaArrowLeft, FaStar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GameHeader({ level, moves, time }) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass neon-border rounded-2xl px-3 py-2 flex items-center justify-between gap-3 w-full"
    >
      <Link
        to="/levels"
        className="btn btn-circle btn-sm bg-white/10 border-0 shrink-0"
      >
        <FaArrowLeft className="text-sm" />
      </Link>

      <div className="flex items-center gap-2 shrink-0">
        <h2 className="text-sm font-black gradient-text leading-none">
          LEVEL {level}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <FaStar className="text-yellow-400 text-xs" />
          <FaStar className="text-yellow-400 text-xs" />
          <FaStar className="text-yellow-400 text-xs" />
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-base font-black leading-none">{moves}</span>
          <span className="text-[10px] text-white/60">Moves</span>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-base font-black leading-none">{time}</span>
          <span className="text-[10px] text-white/60">Time</span>
        </div>
      </div>

      <button className="btn btn-circle btn-sm bg-white/10 border-0 shrink-0">
        <IoSettingsSharp className="text-sm" />
      </button>
    </motion.div>
  );
}