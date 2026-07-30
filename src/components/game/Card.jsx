import { motion } from "framer-motion";

const Card = ({ card, size, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        perspective: "1000px",
      }}
      className="cursor-pointer"
    >
      <motion.div
        animate={{
          rotateY: card.flipped ? 180 : 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 flex items-center justify-center text-white text-3xl font-black shadow-xl"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          ?
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl bg-white flex items-center justify-center text-black text-3xl font-black shadow-xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {card.value}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;