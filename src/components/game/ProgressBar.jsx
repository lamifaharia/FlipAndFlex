import { motion } from "framer-motion";

export default function ProgressBar({
  value,
}) {
  return (
    <div className="glass rounded-full h-3 overflow-hidden">

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: `${value}%`,
        }}
        transition={{
          duration: .6,
        }}
        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
      />

    </div>
  );
}