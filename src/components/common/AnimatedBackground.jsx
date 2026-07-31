import { motion } from "framer-motion";

const stars = Array.from({ length: 80 });
const particles = Array.from({ length: 24 });

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-50 bg-[#090B1F]">

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#090B1F] via-[#131B38] to-[#060714]" />

      {/* Purple Orb */}
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full bg-purple-600/25 blur-[170px] -left-52 -top-52"
        animate={{
          x: [-60, 80, -60],
          y: [-40, 60, -40],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan Orb */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px] -right-60 bottom-[-250px]"
        animate={{
          x: [70, -70, 70],
          y: [40, -50, 40],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pink Orb */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-pink-500/20 blur-[140px] left-1/2 top-1/2"
        animate={{
          x: [-120, 120, -120],
          y: [70, -70, 70],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[900px] h-[900px] rounded-full border border-white/5"
        style={{
          marginLeft: "-450px",
          marginTop: "-450px",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Second Ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[600px] h-[600px] rounded-full border border-cyan-400/10"
        style={{
          marginLeft: "-300px",
          marginTop: "-300px",
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Stars */}
      {stars.map((_, index) => {
        const size = Math.random() * 3 + 1;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      {/* Floating Particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            background:
              index % 3 === 0
                ? "#8B5CF6"
                : index % 3 === 1
                ? "#06B6D4"
                : "#EC4899",

            left: `${Math.random() * 100}%`,
            top: `${110 + Math.random() * 20}%`,
          }}
          animate={{
            y: [-1500],
            x: [
              0,
              Math.random() * 120 - 60,
              Math.random() * 160 - 80,
            ],
            opacity: [0, 0.9, 0],
            scale: [0.4, 1.4, 0.4],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear",
          }}
        />
      ))}

      {/* Tiny Shooting Stars */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`shoot-${i}`}
          className="absolute h-[2px] rounded-full"
          style={{
            width: 120,
            background:
              "linear-gradient(to right, white, transparent)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            rotate: "-35deg",
          }}
          animate={{
            x: [0, 350],
            y: [0, 180],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 5 + Math.random() * 6,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}