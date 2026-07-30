import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WinModal = ({ level }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-base-100 rounded-3xl p-8 text-center w-80 shadow-2xl"
      >
        <h2 className="text-4xl font-black text-success">
          🎉
        </h2>

        <h3 className="text-3xl font-bold mt-4">
          Congratulations!
        </h3>

        <p className="mt-4">
          You completed Level {level}
        </p>

        {level < 25 ? (
          <Link
            to={`/game/${level + 1}`}
            className="btn btn-primary mt-8"
          >
            Next Level →
          </Link>
        ) : (
          <Link
            to="/levels"
            className="btn btn-success mt-8"
          >
            Finish Game
          </Link>
        )}
      </motion.div>

    </div>
  );
};

export default WinModal;