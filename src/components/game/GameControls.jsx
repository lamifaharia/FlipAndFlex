import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRedoAlt,
} from "react-icons/fa";

export default function GameControls({
  onHint,
  onRestart,
}) {
  const buttonClass = `
    w-9
    h-9
    rounded-full
    bg-white/10
    border
    border-white/10
    flex
    items-center
    justify-center
    text-sm
    backdrop-blur-xl
    transition
  `;

  return (
    <div className="flex justify-center gap-2">

      <motion.button
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: .92 }}
        onClick={onHint}
        className={buttonClass}
      >
        <FaLightbulb className="text-yellow-400" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: .92 }}
        onClick={onRestart}
        className={buttonClass}
      >
        <FaRedoAlt className="text-cyan-400" />
      </motion.button>

      

    </div>
  );
}