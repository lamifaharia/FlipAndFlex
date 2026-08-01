import saveBestScore from "../utils/saveBestScore";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import levels from "../data/levels";
import generateLevel from "../utils/levelGenerator";

import Navbar from "../components/common/Navbar";
import GameHeader from "../components/game/GameHeader";
import ProgressBar from "../components/game/ProgressBar";
import GameStats from "../components/game/GameStats";
import GameBoard from "../components/game/GameBoard";
import GameControls from "../components/game/GameControls";
import WinModal from "../components/game/WinModal";

const Game = () => {
  const { level } = useParams();

  const currentLevel = useMemo(
    () => levels.find((item) => item.id === Number(level)),
    [level],
  );

  // =======================
  // STATES
  // =======================

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [canPlay, setCanPlay] = useState(false);

  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const [seconds, setSeconds] = useState(0);

  const [stars, setStars] = useState(3);


  // =======================
  // INITIALIZE LEVEL
  // =======================

  useEffect(() => {
    if (!currentLevel) return;

    const generatedCards = generateLevel(currentLevel);

    setCards(generatedCards);
    setSelectedCards([]);
    setMoves(0);
    setWon(false);
    setSeconds(0);
    setCanPlay(false);
    setStars(3);

    const preview = setTimeout(() => {
      setCards((prev) =>
        prev.map((card) => ({
          ...card,
          flipped: false,
        })),
      );

      setCanPlay(true);
    }, currentLevel.previewTime);

    return () => clearTimeout(preview);
  }, [currentLevel]);

  // =======================
  // TIMER
  // =======================

  useEffect(() => {
    if (!canPlay || won) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [canPlay, won]);

  // =======================
  // GAME CONTROLS
  // =======================

  const handleRestart = () => {
    window.location.reload();
  };

  const handleHint = () => {
    if (!canPlay) return;

    setCanPlay(false);

    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        flipped: true,
      })),
    );

    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) => ({
          ...card,
          flipped: card.matched,
        })),
      );

      setCanPlay(true);
    }, 1000);
  };


  // =======================
  // PROGRESS
  // =======================

  const matchedCount = cards.filter((card) => card.matched).length;

  const totalMatchCards = cards.filter(
    (card) => card.value !== currentLevel?.centerCard,
  ).length;

  const progress =
    totalMatchCards === 0
      ? 0
      : Math.round((matchedCount / totalMatchCards) * 100);

  // =======================
  // CARD CLICK
  // =======================

  const handleCardClick = (id) => {
    if (!canPlay) return;

    const clickedCard = cards.find((card) => card.id === id);

    if (!clickedCard) return;

    if (clickedCard.flipped || clickedCard.matched) return;

    if (selectedCards.length === 2) return;

    // Flip selected card
    const updatedCards = cards.map((card) =>
      card.id === id
        ? {
            ...card,
            flipped: true,
          }
        : card,
    );

    setCards(updatedCards);

    // Play flip sound

    const newSelection = [...selectedCards, id];

    setSelectedCards(newSelection);

    if (newSelection.length !== 2) return;

    setCanPlay(false);
    setMoves((prev) => prev + 1);

    const first = updatedCards.find((card) => card.id === newSelection[0]);

    const second = updatedCards.find((card) => card.id === newSelection[1]);

    // =======================
    // MATCH
    // =======================

    if (first.value === second.value) {

      setTimeout(() => {
        const matchedCards = updatedCards.map((card) => {
          if (card.id === first.id || card.id === second.id) {
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
          (card) => card.matched || card.value === currentLevel.centerCard,
        );

        if (finished) {

          let earnedStars = 3;

          if (moves + 1 > 25 || seconds > 90) {
            earnedStars = 1;
          } else if (moves + 1 > 18 || seconds > 60) {
            earnedStars = 2;
          }

          setStars(earnedStars);

          saveBestScore(
            currentLevel.id,
            moves + 1,
            seconds,
            earnedStars
          );

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
      }, 500);
    }

    // =======================
    // WRONG MATCH
    // =======================
    else {

      setTimeout(() => {
        setCards((prev) =>
          prev.map((card) => {
            if (card.id === first.id || card.id === second.id) {
              return {
                ...card,
                flipped: false,
              };
            }

            return card;
          }),
        );

        setSelectedCards([]);
        setCanPlay(true);
      }, 700);
    }
  };

  // =======================
  // LEVEL NOT FOUND
  // =======================

  if (!currentLevel) {
    return (
      <div className="min-h-screen flex items-center justify-center text-5xl font-black text-white">
        Level Not Found
      </div>
    );
  }

  // =======================
  // TIME FORMAT
  // =======================

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  // =======================
  // UI
  // =======================

  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto px-3 py-2 h-[calc(100vh-70px)] flex flex-col gap-2">
        <div className="glass neon-border rounded-2xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <GameHeader
            level={currentLevel.id}
            moves={moves}
            time={`${minutes}:${secs}`}
          />

          <GameControls
            onHint={handleHint}
            onRestart={handleRestart}
          />
        </div>

        <div className="glass neon-border rounded-2xl px-4 py-2 flex items-center gap-4">
          <div className="flex-1">
            <ProgressBar value={progress} />
          </div>
          <GameStats matched={matchedCount / 2} total={totalMatchCards / 2} />
        </div>

        <div className="glass neon-border rounded-2xl p-2 flex-1 flex items-center justify-center overflow-hidden">
          <GameBoard
            cards={cards}
            cols={currentLevel.cols}
            onCardClick={handleCardClick}
          />
        </div>
      </section>

      {won && (
        <WinModal
          level={currentLevel.id}
          moves={moves}
          time={seconds}
          stars={stars}
        />
      )}
    </>
  );
};

export default Game;