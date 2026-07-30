import Card from "./Card";

const GameBoard = ({ cards, cols, onCardClick }) => {
  const getCardSize = () => {
    switch (cols) {
      case 3:
        return 90;

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
    <div
      className="grid justify-center gap-3 mt-10"
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
  );
};

export default GameBoard;