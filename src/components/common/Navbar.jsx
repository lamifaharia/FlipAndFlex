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
      <div className="mx-5 mt-2 glass neon-border">

        <div className="h-12 px-6 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                rotate: 15,
                scale: 1.1,
              }}
              className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 flex justify-center items-center shadow-xl"
            >
              <FaBrain className="text-sm text-white" />
            </motion.div>

            <div>

              <h1 className="text-lg font-black gradient-text leading-none">

                FlipAndFlex

              </h1>

              <p className="text-[9px] text-white/60 tracking-widest leading-none mt-0.5">

                MEMORY GAME

              </p>

            </div>
          </Link>

          {/* Menu */}

          <div className="hidden md:flex gap-2">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-1 text-sm rounded-full transition ${
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
                `px-4 py-1 text-sm rounded-full transition ${
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
            className="btn btn-circle btn-sm bg-white/10 border-0 text-base"
          >
            <IoSettingsSharp />
          </motion.button>

        </div>

      </div>
    </motion.header>
  );
}