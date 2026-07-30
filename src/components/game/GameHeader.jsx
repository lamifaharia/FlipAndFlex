import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const GameHeader = ({ level }) => {
  return (
    <header className="flex items-center justify-between w-full">

      <Link
        to="/levels"
        className="btn btn-circle btn-sm btn-primary"
      >
        <FaArrowLeft />
      </Link>

      <h2 className="text-3xl font-black">
        Level {level}
      </h2>

      <div className="flex gap-1 text-red-500 text-xl">
        <FaHeart />
        <FaHeart />
        <FaHeart />
      </div>

    </header>
  );
};

export default GameHeader;