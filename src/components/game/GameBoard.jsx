import { motion } from "framer-motion";
import Card from "./Card";

const GameBoard = ({ cards, cols, onCardClick }) => {
  const rows = cols ? Math.ceil(cards.length / cols) : 1;

  // Dynamically size cards to fill the available board space
  // based on how many columns/rows this level needs.
  const getCardSize = () => {
    const base = {
      3: 150,
      4: 128,
      5: 108,
      6: 92,
    };

    const maxByCols = base[cols] ?? 100;

    return `clamp(48px, min(${(90 / cols).toFixed(2)}vw, ${(
      78 / rows
    ).toFixed(2)}vh), ${maxByCols}px)`;
  };

  const cardSize = getCardSize();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative w-full h-full flex justify-center items-center"
    >
      {/* Outer Glow */}

      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-400/20 blur-2xl" />

      {/* Board */}

      <div
        className="
          relative
          w-full
          h-full
          rounded-[28px]
          overflow-hidden
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,.45)]
          p-3
          flex
          items-center
          justify-center
        "
      >
        {/* Decorative Glow */}

        <div className="absolute -left-24 -top-24 w-56 h-56 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 w-60 h-60 rounded-full bg-cyan-500/20 blur-[120px]" />

        {/* Grid */}

        <div
          className="relative grid justify-center content-center gap-2.5"
          style={{
            gridTemplateColumns: `repeat(${cols}, ${cardSize})`,
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