import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaCrown } from "react-icons/fa";
import { useEffect, useState } from "react";

const WinModal = ({ level, moves, time, stars }) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const nextLevel = level + 1;

  // ===========================
  // STAR CALCULATION
  // ===========================

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <>
      <Confetti
        width={size.width}
        height={size.height}
        recycle={false}
        numberOfPieces={stars >= 3 ? 500 : 300}
        gravity={0.25}
        colors={["#a855f7", "#ec4899", "#22d3ee", "#facc15"]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-center items-center px-5"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 14 }}
          className="w-full max-w-md rounded-3xl bg-gradient-to-b from-[#1f244d] to-[#0e1225] border border-white/10 shadow-[0_0_80px_rgba(139,92,246,.3)] overflow-hidden"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="p-8 text-center"
          >
            {/* CROWN */}

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.1,
              }}
              className="relative w-24 h-24 mx-auto"
            >
              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-yellow-400/50 blur-xl"
              />

              <motion.div
                animate={{
                  rotate: [-8, 8, -8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  ease: "easeInOut",
                }}
                className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 flex justify-center items-center mx-auto shadow-[0_0_40px_rgba(250,204,21,.6)]"
              >
                <FaCrown className="text-5xl text-white drop-shadow" />
              </motion.div>
            </motion.div>






            <motion.h1
  variants={item}
  className="text-5xl font-black text-white mt-6"
>
  {level === 25 ? "GAME COMPLETED" : "LEVEL COMPLETE"}
</motion.h1>

<motion.p variants={item} className="mt-4 text-white/70">
  {level === 25 ? (
    <>
      🎉 Congratulations!
      <br />
      You completed all{" "}
      <span className="text-cyan-300 font-bold">25 Levels</span>
      <br />
      and became the{" "}
      <span className="text-yellow-400 font-bold">
        Memory Master!
      </span>
    </>
  ) : (
    <>
      Great job clearing Level{" "}
      <span className="text-yellow-400 font-bold">
        {level}
      </span>
    </>
  )}
</motion.p>

{/* STARS */}

<motion.div
  variants={item}
  className="flex justify-center gap-3 mt-8"
>
  {[1, 2, 3].map((slot) =>
    slot <= stars ? (
      <motion.div
        key={slot}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 12,
          delay: 0.6 + slot * 0.15,
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            delay: 1.2 + slot * 0.15,
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <FaStar className="text-yellow-400 text-4xl drop-shadow-[0_0_8px_rgba(250,204,21,.7)]" />
        </motion.div>
      </motion.div>
    ) : (
      <motion.div
        key={slot}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.6 + slot * 0.15,
        }}
      >
        <FaRegStar className="text-gray-500 text-4xl" />
      </motion.div>
    )
  )}
</motion.div>

{/* STATS */}

<motion.div
  variants={item}
  className="grid grid-cols-3 gap-3 mt-8"
>
  <div className="bg-white/5 rounded-xl py-4">
    <p className="text-white/50 text-xs">MOVES</p>
    <h2 className="text-2xl font-black">
      {moves}
    </h2>
  </div>

  <div className="bg-white/5 rounded-xl py-4">
    <p className="text-white/50 text-xs">TIME</p>
    <h2 className="text-2xl font-black">
      {time}s
    </h2>
  </div>

  <div className="bg-white/5 rounded-xl py-4">
    <p className="text-white/50 text-xs">STARS</p>
    <h2 className="text-2xl font-black text-yellow-400">
      {stars} / 3
    </h2>
  </div>
</motion.div>

<motion.div
  variants={item}
  className="mt-8 space-y-4"
>
  {level < 25 ? (
    <>
      <Link
        to={`/game/${nextLevel}`}
        className="btn w-full h-14 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 border-0 text-white text-lg font-bold"
      >
        ▶ Next Level
      </Link>

      <Link to="/levels">
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -2,
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
          whileTap={{ scale: 0.97 }}
          className="btn btn-outline w-full rounded-full"
        >
          Level Select
        </motion.div>
      </Link>
    </>
  ) : (
    <>
      <motion.h2
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-black text-yellow-300"
      >
        👑 MEMORY MASTER
      </motion.h2>

      <p className="text-white/60">
        You have officially completed Flip & Flex.
        <br />
        Thanks for playing!
      </p>

      <Link
        to="/"
        className="btn w-full h-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-0 text-lg font-bold"
      >
        🏠 Back to Home
      </Link>

      <Link
        to="/levels"
        className="btn btn-outline w-full rounded-full"
      >
        📋 Level Select
      </Link>
    </>
  )}
</motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  </>
);
};

export default WinModal;