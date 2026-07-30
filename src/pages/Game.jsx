import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import levels from "../data/levels";
import generateLevel from "../utils/levelGenerator";

import AnimatedBackground from "../components/common/AnimatedBackground";
import GameFrame from "../components/common/GameFrame";
import GameBoard from "../components/game/GameBoard";
import WinModal from "../components/game/WinModal";

const Game = () => {
  const { level } = useParams();

  const currentLevel = levels.find(
    (item) => item.id === Number(level)
  );

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [canPlay, setCanPlay] = useState(false);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (!currentLevel) return;

    const generatedCards = generateLevel(currentLevel);

    setCards(generatedCards);
    setSelectedCards([]);
    setMoves(0);
    setWon(false);
    setCanPlay(false);

    const timer = setTimeout(() => {
      setCards((prev) =>
        prev.map((card) => ({
          ...card,
          flipped: false,
        }))
      );

      setCanPlay(true);
    }, currentLevel.previewTime);

    return () => clearTimeout(timer);
  }, [currentLevel]);

  const handleCardClick = (id) => {
    if (!canPlay) return;

    const clickedCard = cards.find((card) => card.id === id);

    if (!clickedCard) return;

    if (clickedCard.flipped || clickedCard.matched) return;

    if (selectedCards.length === 2) return;

    const updatedCards = cards.map((card) =>
      card.id === id
        ? {
            ...card,
            flipped: true,
          }
        : card
    );

    setCards(updatedCards);

    const newSelection = [...selectedCards, id];

    setSelectedCards(newSelection);

    if (newSelection.length === 2) {
      setCanPlay(false);
      setMoves((previous) => previous + 1);

      const first = updatedCards.find(
        (card) => card.id === newSelection[0]
      );

      const second = updatedCards.find(
        (card) => card.id === newSelection[1]
      );

      if (first.value === second.value) {
        setTimeout(() => {
          const matchedCards = updatedCards.map((card) => {
            if (
              card.id === first.id ||
              card.id === second.id
            ) {
              return {
                ...card,
                matched: true,
              };
            }

            return card;
          });

          setCards(matchedCards);
          setSelectedCards([]);
          setCanPlay(true);

          const finished = matchedCards.every(
            (card) =>
              card.matched ||
              card.value === currentLevel.centerCard
          );

          if (finished) {
            setWon(true);

            const highest =
              Number(localStorage.getItem("highestLevel")) || 1;

            if (currentLevel.id >= highest) {
              localStorage.setItem(
                "highestLevel",
                currentLevel.id + 1
              );
            }
          }
        }, 400);
      } else {
        setTimeout(() => {
          setCards((previous) =>
            previous.map((card) => {
              if (
                card.id === first.id ||
                card.id === second.id
              ) {
                return {
                  ...card,
                  flipped: false,
                };
              }

              return card;
            })
          );

          setSelectedCards([]);
          setCanPlay(true);
        }, 700);
      }
    }
  };

  if (!currentLevel) {
    return (
      <div className="text-center mt-20 text-5xl">
        Level Not Found
      </div>
    );
  }

  return (
    <>
      <AnimatedBackground />

      <GameFrame>

        <section className="p-6">

          <h1 className="text-4xl font-black text-center">
            Level {currentLevel.id}
          </h1>

          <p className="text-center mt-4 text-xl">
            Moves: {moves}
          </p>

          <GameBoard
            cards={cards}
            cols={currentLevel.cols}
            onCardClick={handleCardClick}
          />

        </section>

      </GameFrame>

      {won && (
        <WinModal
          level={currentLevel.id}
        />
      )}
    </>
  );
};

export default Game;