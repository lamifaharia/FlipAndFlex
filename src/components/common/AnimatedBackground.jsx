import { motion } from "framer-motion";

const circles = [
  { size: 250, left: "10%", top: "15%", color: "bg-purple-500/20" },
  { size: 180, left: "75%", top: "10%", color: "bg-cyan-500/20" },
  { size: 300, left: "65%", top: "65%", color: "bg-pink-500/20" },
  { size: 160, left: "15%", top: "75%", color: "bg-yellow-400/20" },
];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-[#0b1020]">

      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
          }}
          className={`absolute rounded-full blur-3xl ${circle.color}`}
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top,
          }}
        />
      ))}

    </div>
  );
};

export default AnimatedBackground;