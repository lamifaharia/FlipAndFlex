import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRedoAlt,
  FaVolumeUp,
} from "react-icons/fa";

export default function GameControls({
  onHint,
  onRestart,
  soundOn,
  toggleSound,
}) {
  const buttonClass = `
    w-14
    h-14
    rounded-2xl
    bg-white/10
    border
    border-white/10
    flex
    items-center
    justify-center
    text-xl
    backdrop-blur-xl
    transition
  `;

  return (
    <div className="flex justify-center gap-4 mt-5">

      <motion.button
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: .92 }}
        onClick={onHint}
        className={buttonClass}
      >
        <FaLightbulb className="text-yellow-400" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: .92 }}
        onClick={onRestart}
        className={buttonClass}
      >
        <FaRedoAlt className="text-cyan-400" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: .92 }}
        onClick={toggleSound}
        className={buttonClass}
      >
        <FaVolumeUp
          className={
            soundOn
              ? "text-green-400"
              : "text-gray-400"
          }
        />
      </motion.button>

    </div>
  );
}