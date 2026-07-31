import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCrown, FaStar } from "react-icons/fa";

const WinModal = ({ level }) => {
  const nextLevel = level + 1;

  const width = window.innerWidth;
const height = window.innerHeight;

  return (
    <>
      {/* Confetti */}
      <div className="fixed inset-0 z-[998] pointer-events-none">
        <Confetti
          width={width ?? 0}
          height={height ?? 0}
          recycle={false}
          numberOfPieces={350}
          gravity={0.22}
        />
      </div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center px-5"
      >
        {/* Modal */}
        <motion.div
          initial={{
            scale: 0.4,
            opacity: 0,
            y: 120,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 14,
          }}
          className="relative w-full max-w-md overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-b from-[#252b63] via-[#1b2048] to-[#101426] shadow-[0_0_80px_rgba(139,92,246,.35)]"
        >
          {/* Background Glow */}
          <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/30 blur-[120px]" />

          <div className="relative p-10 text-center">
            {/* Crown */}
            <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                className="absolute h-32 w-32 rounded-full border-2 border-yellow-300/30"
              />

              {/* Crown Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [-8, 8, -8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-2xl"
              >
                <FaCrown className="text-5xl text-white" />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold uppercase tracking-[6px] text-white/70">
              Level {level}
            </h3>

            <motion.h1
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-2 text-5xl font-black gradient-text"
            >
              COMPLETE!
            </motion.h1>

            <p className="mt-5 text-lg text-white/70">
              Excellent!
              <br />
              You completed
              <span className="font-bold text-yellow-300">
                {" "}
                Level {level}
              </span>
              .
            </p>

            {/* Stars */}
            <div className="mt-8 flex justify-center gap-4">
              {[1, 2, 3].map((star) => (
                <motion.div
                  key={star}
                  initial={{
                    scale: 0,
                    rotate: -180,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: star * 0.25,
                    duration: 0.5,
                  }}
                >
                  <FaStar className="text-5xl text-yellow-400 drop-shadow-xl" />
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 space-y-4">
              {level < 25 ? (
                <Link
                  to={`/game/${nextLevel}`}
                  className="btn h-14 w-full rounded-full border-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-lg font-bold text-white transition hover:scale-105"
                >
                  ▶ Next Level
                </Link>
              ) : (
                <Link
                  to="/levels"
                  className="btn h-14 w-full rounded-full border-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-lg font-bold"
                >
                  🏆 Finish Game
                </Link>
              )}

              <Link
                to="/levels"
                className="btn btn-outline h-14 w-full rounded-full"
              >
                Level Select
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default WinModal;