import shuffle from "./shuffle";

const generateLevel = (level) => {
  const cards = [];

  // Create pairs
  level.pairs.forEach((pair) => {
    cards.push({
      value: pair,
      matched: false,
      flipped: true,
    });

    cards.push({
      value: pair,
      matched: false,
      flipped: true,
    });
  });

  // Add center card if needed
  if (level.centerCard !== null) {
    cards.push({
      value: level.centerCard,
      matched: false,
      flipped: true,
      center: true,
    });
  }

  const shuffled = shuffle(cards);

  return shuffled.map((card, index) => ({
    id: index,
    ...card,
  }));
};

export default generateLevel;