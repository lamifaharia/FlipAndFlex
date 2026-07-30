const GameFrame = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center p-5">

      <div
        className="
        w-full
        max-w-[430px]
        min-h-[880px]
        rounded-[40px]
        border
        border-purple-500/40
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        overflow-y-auto
        "
      >
        {children}
      </div>

    </div>
  );
};

export default GameFrame;