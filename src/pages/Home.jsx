import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/common/Navbar";

export default function Home() {

return(

<>

<Navbar/>

<section className="min-h-[calc(100vh-96px)] flex flex-col justify-center items-center text-center px-5">

<motion.div

initial={{opacity:0,y:-80}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

className="float"

>

<h1 className="text-7xl md:text-9xl font-black neonText">

FLIP

</h1>

<h1 className="text-7xl md:text-9xl font-black text-white">

AND

</h1>

<h1 className="text-7xl md:text-9xl font-black text-cyan-300">

FLEX

</h1>

</motion.div>

<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.7}}

className="text-white/70 mt-10 text-xl max-w-xl leading-9"

>

Train your brain with colorful memory challenges.

Beat all <span className="text-yellow-400 font-bold">25 Levels</span>

and become the Memory Master.

</motion.p>

<motion.div

initial={{scale:0}}

animate={{scale:1}}

transition={{delay:1}}

className="mt-16 flex gap-6 flex-wrap justify-center"

>

<Link

to="/levels"

className="glowButton px-12 py-5 rounded-full text-2xl font-bold"

>

▶ PLAY

</Link>

<button

className="btn btn-outline rounded-full px-10 text-xl"

>

How To Play

</button>

</motion.div>

<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
repeat:Infinity,
duration:2
}}

className="mt-24 text-white/40"

>

▼

</motion.div>

</section>

</>

)

}