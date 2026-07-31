import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50"
    >
      <div className="mx-5 mt-5 glass neon-border">

        <div className="h-20 px-8 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-4"
          >
            <motion.div
              whileHover={{
                rotate: 15,
                scale: 1.1,
              }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 flex justify-center items-center shadow-xl"
            >
              <FaBrain className="text-2xl text-white" />
            </motion.div>

            <div>

              <h1 className="text-3xl font-black gradient-text">

                FlipAndFlex

              </h1>

              <p className="text-xs text-white/60 tracking-widest">

                MEMORY GAME

              </p>

            </div>
          </Link>

          {/* Menu */}

          <div className="hidden md:flex gap-3">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full transition ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "hover:bg-white/10"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/levels"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full transition ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "hover:bg-white/10"
                }`
              }
            >
              Levels
            </NavLink>

          </div>

          {/* Settings */}

          <motion.button
            whileHover={{
              rotate: 90,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="btn btn-circle bg-white/10 border-0 text-xl"
          >
            <IoSettingsSharp />
          </motion.button>

        </div>

      </div>
    </motion.header>
  );
}