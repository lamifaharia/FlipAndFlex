const GameStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full mt-6">

      <div className="bg-base-200 rounded-2xl p-4 text-center">

        <p className="text-gray-400">
          Time
        </p>

        <h3 className="text-3xl font-bold">
          00:00
        </h3>

      </div>

      <div className="bg-base-200 rounded-2xl p-4 text-center">

        <p className="text-gray-400">
          Moves
        </p>

        <h3 className="text-3xl font-bold">
          0
        </h3>

      </div>

    </div>
  );
};

export default GameStats;