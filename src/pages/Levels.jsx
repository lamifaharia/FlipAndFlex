import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import LevelCard from "../components/levels/LevelCard";
import levels from "../data/levels";

export default function Levels() {
  const highestLevel =
    Number(localStorage.getItem("highestLevel")) || 1;

  const completedLevels = highestLevel - 1;
  const progress = (completedLevels / levels.length) * 100;

  return (
    <>
      <Navbar />

      <section className="min-h-screen px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto mt-10"
        >
          {/* Header */}

          <div className="text-center mb-10">
            <motion.h1
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-6xl font-black gradient-text"
            >
              LEVEL SELECT
            </motion.h1>

            <p className="mt-4 text-white/70 text-lg">
              Complete all 25 levels to become the Memory Master.
            </p>
          </div>

          {/* Game Board */}

          <div className="glass neon-border rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative Glow */}

            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-[120px]" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]" />

            {/* Progress */}

            <div className="relative z-10 mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  Your Journey
                </h2>

                <span className="text-yellow-300 font-bold">
                  ⭐ {completedLevels} / {levels.length} Completed
                </span>
              </div>

              <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                />
              </div>
            </div>

            {/* Levels Grid */}

            <div
              className="
                relative
                z-10
                grid
                grid-cols-5
                gap-8
                justify-items-center
              "
            >
              {levels.map((level) => {
                const score = JSON.parse(
                  localStorage.getItem(`level-${level.id}`)
                );

                return (
                  <LevelCard
                    key={level.id}
                    level={level}
                    unlocked={level.id <= highestLevel}
                    score={score}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}