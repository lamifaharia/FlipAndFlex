import { motion } from "framer-motion";

export default function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="glass rounded-full h-1.5 overflow-hidden flex-1">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
        />
      </div>

      <span className="text-xs font-bold text-white/70 tabular-nums w-9 text-right shrink-0">
        {value}%
      </span>
    </div>
  );
}