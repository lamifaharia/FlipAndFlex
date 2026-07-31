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
    [level]
  );

  // =========================
  // STATES
  // =========================

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [canPlay, setCanPlay] = useState(false);

  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const [seconds, setSeconds] = useState(0);

  const [soundOn, setSoundOn] = useState(true);

  // =========================
  // INITIALIZE LEVEL
  // =========================

  useEffect(() => {
    if (!currentLevel) return;

    const generated = generateLevel(currentLevel);

    setCards(generated);
    setSelectedCards([]);
    setMoves(0);
    setWon(false);
    setSeconds(0);
    setCanPlay(false);

    const preview = setTimeout(() => {
      setCards((prev) =>
        prev.map((card) => ({
          ...card,
          flipped: false,
        }))
      );

      setCanPlay(true);
    }, currentLevel.previewTime);

    return () => clearTimeout(preview);
  }, [currentLevel]);

  // =========================
  // TIMER
  // =========================

  useEffect(() => {
    if (!canPlay || won) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [canPlay, won]);

  // =========================
  // GAME CONTROLS
  // =========================

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
      }))
    );

    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) => ({
          ...card,
          flipped: card.matched,
        }))
      );

      setCanPlay(true);
    }, 1000);
  };

  const toggleSound = () => {
    setSoundOn((prev) => !prev);
  };

  // =========================
  // PROGRESS
  // =========================

  const matchedCount = cards.filter((card) => card.matched).length;

  const totalMatchCards = cards.filter(
    (card) => card.value !== currentLevel?.centerCard
  ).length;

  const progress =
    totalMatchCards === 0
      ? 0
      : Math.round((matchedCount / totalMatchCards) * 100);

  // =========================
  // CARD CLICK
  // =========================

  const handleCardClick = (id) => {
    if (!canPlay) return;

    const clicked = cards.find((card) => card.id === id);

    if (!clicked) return;

    if (clicked.flipped || clicked.matched) return;

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

    if (newSelection.length !== 2) return;

    setCanPlay(false);
    setMoves((prev) => prev + 1);

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
        setCards((prev) =>
          prev.map((card) => {
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
  };

  // =========================
  // LEVEL NOT FOUND
  // =========================

  if (!currentLevel) {
    return (
      <div className="min-h-screen flex justify-center items-center text-5xl font-black">
        Level Not Found
      </div>
    );
  }

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-3 h-[calc(100vh-90px)] flex flex-col">

        <GameHeader
          level={currentLevel.id}
          moves={moves}
          time={`${minutes}:${secs}`}
        />

        <div className="glass neon-border rounded-[30px] p-4 mt-3 flex-1 flex flex-col overflow-hidden">

          <ProgressBar value={progress} />

          <GameStats
            matched={matchedCount / 2}
            total={totalMatchCards / 2}
          />

          <GameControls
            onHint={handleHint}
            onRestart={handleRestart}
            soundOn={soundOn}
            toggleSound={toggleSound}
          />

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
        />
      )}
    </>
  );
};

export default Game;