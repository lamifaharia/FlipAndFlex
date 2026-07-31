import { motion } from "framer-motion";
import Card from "./Card";

const GameBoard = ({ cards, cols, onCardClick }) => {
  const getCardSize = () => {
    switch (cols) {
      case 3:
        return 95;

      case 4:
        return 82;

      case 5:
        return 68;

      case 6:
        return 56;

      default:
        return 70;
    }
  };

  const cardSize = getCardSize();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative mt-3 flex-1 flex justify-center items-center"
    >
      {/* Outer Glow */}

      <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-400/20 blur-2xl" />

      {/* Board */}

      <div
        className="
          relative
          rounded-[36px]
          overflow-hidden
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,.45)]
          p-4
        "
      >
        {/* Decorative Glow */}

        <div className="absolute -left-24 -top-24 w-56 h-56 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 w-60 h-60 rounded-full bg-cyan-500/20 blur-[120px]" />

        {/* Grid */}

        <div
          className="relative grid justify-center gap-2"
          style={{
            gridTemplateColumns: `repeat(${cols}, ${cardSize}px)`,
          }}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              size={cardSize}
              onClick={() => onCardClick(card.id)}
            />
          ))}
        </div>

        {/* Bottom Decoration */}

        <div className="absolute left-8 right-8 bottom-3 h-[2px] rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </motion.div>
  );
};

export default GameBoard;
