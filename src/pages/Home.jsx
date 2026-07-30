import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedBackground from "../components/common/AnimatedBackground";
import GameFrame from "../components/common/GameFrame";

const Home = () => {
  return (
    <>
      <AnimatedBackground />

      <GameFrame>
        <section className="flex flex-col justify-center items-center h-full text-center px-8 py-20">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="
            text-6xl
            font-black
            bg-gradient-to-r
            from-pink-500
            via-purple-400
            to-cyan-400
            bg-clip-text
            text-transparent
            "
          >
            FlipAndFlex
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-gray-300 text-lg leading-8"
          >
            Test your memory,
            <br />
            clear all 25 exciting levels,
            <br />
            and become the Memory Master.
          </motion.p>

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-16"
          >
            <Link
              to="/levels"
              className="
              btn
              btn-primary
              btn-lg
              rounded-full
              px-12
              text-lg
              "
            >
              ▶ Play Game
            </Link>
          </motion.div>
        </section>
      </GameFrame>
    </>
  );
};

export default Home;
