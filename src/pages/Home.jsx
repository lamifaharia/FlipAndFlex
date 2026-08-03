import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Loading from "./Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const highestLevel =
    Number(localStorage.getItem("highestLevel")) || 1;

  const completedLevels = Math.max(highestLevel - 1, 0);

  let totalStars = 0;

  for (let i = 1; i <= 25; i++) {
    const score = JSON.parse(localStorage.getItem(`level-${i}`));

    if (score) {
      totalStars += score.stars || 0;
    }
  }

  return (
    <>
      <Navbar />

      <section className="min-h-[calc(100vh-56px)] flex items-center justify-center px-5">

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className="glass neon-border rounded-[35px] w-full max-w-xl p-10 text-center"
        >

          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-6xl md:text-7xl font-black leading-none"
          >
            <span className="gradient-text">FLIP</span>
            <br />
            <span className="text-white">AND</span>
            <br />
            <span className="text-cyan-300">FLEX</span>
          </motion.h1>

          <p className="text-white/60 mt-5">
            Train your memory and complete all 25 levels.
          </p>

          <Link
            to="/levels"
            className="game-btn w-full mt-10 py-5 rounded-2xl text-xl font-bold block pulse-glow"
          >
            ▶ PLAY GAME
          </Link>

          <p className="text-cyan-300 mt-4 font-semibold">
            Continue • Level {highestLevel}
          </p>

          <div className="grid grid-cols-3 gap-4 mt-10">

            <div className="glass rounded-2xl py-5">
              <p className="text-3xl">⭐</p>
              <h2 className="text-2xl font-bold text-white mt-2">
                {totalStars}
              </h2>
              <p className="text-white/50 text-sm">
                Stars
              </p>
            </div>

            <div className="glass rounded-2xl py-5">
              <p className="text-3xl">🏆</p>
              <h2 className="text-2xl font-bold text-white mt-2">
                {completedLevels} / 25
              </h2>
              <p className="text-white/50 text-sm">
                Levels
              </p>
            </div>

            <div className="glass rounded-2xl py-5">
              <p className="text-3xl">🔥</p>
              <h2 className="text-2xl font-bold text-white mt-2">
                {highestLevel}
              </h2>
              <p className="text-white/50 text-sm">
                Highest
              </p>
            </div>

          </div>

          <div className="flex justify-center gap-4 mt-10">

            <button className="btn btn-circle btn-outline text-xl">
              ⚙
            </button>

            <button className="btn btn-circle btn-outline text-xl">
              ?
            </button>

          </div>

        </motion.div>

      </section>
    </>
  );
}