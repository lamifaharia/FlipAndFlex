import { useEffect, useState } from "react";

import AnimatedBackground from "../components/common/AnimatedBackground";
import GameFrame from "../components/common/GameFrame";
import LevelCard from "../components/levels/LevelCard";

import levels from "../data/levels";

const Levels = () => {
  const [highestUnlocked, setHighestUnlocked] = useState(1);

  useEffect(() => {
    const saved = Number(localStorage.getItem("highestLevel")) || 1;
    setHighestUnlocked(saved);
  }, []);

  return (
    <>
      <AnimatedBackground />

      <GameFrame>
        <section className="p-6">

          <h1 className="text-4xl font-black text-center mb-8">
            Select Level
          </h1>

          <div className="grid grid-cols-5 gap-4">

            {levels.map((level) => (
              <LevelCard
                key={level.id}
                level={level}
                unlocked={level.id <= highestUnlocked}
                completed={level.id < highestUnlocked}
              />
            ))}

          </div>

        </section>
      </GameFrame>
    </>
  );
};

export default Levels;