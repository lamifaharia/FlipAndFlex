import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GameHeader({ level, moves, time }) {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass neon-border rounded-3xl px-5 py-3 mb-3"
    >
      <div className="flex justify-between items-center">
        <Link to="/levels" className="btn btn-circle bg-white/10 border-0">
          <FaArrowLeft />
        </Link>

        <div className="text-center">
          <h2 className="text-2xl font-black gradient-text">LEVEL {level}</h2>

          <p className="text-white/60">Memory Challenge</p>
        </div>

        <button className="btn btn-circle bg-white/10 border-0">
          <IoSettingsSharp />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="glass rounded-2xl py-4 text-center">
          <div className="flex justify-center gap-1 mb-2">
            <FaHeart className="text-red-500" />
            <FaHeart className="text-red-500" />
            <FaHeart className="text-red-500" />
          </div>

          <p className="text-xs text-white/60">Lives</p>
        </div>

        <div className="glass rounded-2xl py-2 text-center">
          <h3 className="text-3xl font-black">{moves}</h3>

          <p className="text-sm text-white/60">Moves</p>
        </div>

        <div className="glass rounded-2xl py-4 text-center">
          <h3 className="text-3xl font-black">{time}</h3>

          <p className="text-sm text-white/60">Time</p>
        </div>
      </div>
    </motion.div>
  );
}
