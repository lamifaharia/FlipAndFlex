import { motion } from "framer-motion";

const Card = ({ card, size, onClick }) => {
  return (
    <motion.div
      whileHover={
        !card.flipped && !card.matched
          ? {
              scale: 1.06,
              y: -6,
            }
          : {}
      }
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        perspective: "1200px",
      }}
      className="cursor-pointer select-none"
    >
      <motion.div
        animate={{
          rotateY: card.flipped ? 180 : 0,
          scale: card.matched ? [1, 1.12, 1] : 1,
        }}
        transition={{
          rotateY: {
            duration: 0.45,
          },
          scale: {
            duration: 0.4,
          },
        }}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}

        <div
          style={{
            backfaceVisibility: "hidden",
          }}
          className={`
          absolute
          inset-0
          rounded-3xl
          overflow-hidden
          border-2

          ${
            card.matched
              ? "border-green-300"
              : "border-purple-400/50"
          }

          shadow-2xl
          flex
          items-center
          justify-center
        `}
        >
          {/* Background */}

          <div
            className={`absolute inset-0
            ${
              card.matched
                ? "bg-gradient-to-br from-green-400 via-emerald-500 to-green-700"
                : "bg-gradient-to-br from-purple-700 via-fuchsia-600 to-cyan-500"
            }
          `}
          />

          {/* Shine */}

          {!card.matched && (
            <motion.div
              animate={{
                x: [-120, 140],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.4,
                ease: "linear",
              }}
              className="
                absolute
                top-[-20px]
                left-[-20px]
                w-8
                h-44
                rotate-[20deg]
                bg-white/30
                blur-sm
              "
            />
          )}

          {/* Glow */}

          <div className="absolute inset-0 bg-white/5" />

          {/* Question */}

          <motion.span
            animate={
              !card.flipped
                ? {
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 1.4,
            }}
            className="relative text-white text-3xl font-black drop-shadow-xl"
          >
            ?
          </motion.span>
        </div>

        {/* BACK */}

        <div
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
          className={`
          absolute
          inset-0
          rounded-3xl
          overflow-hidden
          border-2

          ${
            card.matched
              ? "border-green-300"
              : "border-cyan-300"
          }

          bg-white

          shadow-2xl

          flex
          flex-col
          items-center
          justify-center
        `}
        >
          {/* Decorative circles */}

          <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-purple-100" />

          <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-cyan-100" />

          {/* Value */}

          <motion.div
            animate={
              card.matched
                ? {
                    scale: [1, 1.15, 1],
                  }
                : {}
            }
            transition={{
              repeat: card.matched ? Infinity : 0,
              duration: 0.8,
            }}
            className="relative z-10 text-4xl font-black text-gray-800"
          >
            {card.value}
          </motion.div>

          {/* Match badge */}

          {card.matched && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="mt-2 text-green-600 text-xl"
            >
              ✓
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;