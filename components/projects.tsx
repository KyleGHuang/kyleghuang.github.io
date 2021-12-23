import Flashcard from "./flashcard";
import Website from "./website";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="w-full h-full grid grid-cols-1 auto-rows-auto pr-10 space-y-1 xl:w-4/6"
      animate={{ x: 20 }}
      transition={{ delay: 3 }}
    >
      <motion.p
        className="text-3xl underline underline-offset-8 decoration-black decoration-2 text-left"
        animate={{ y: 40 }}
        transition={{ delay: 3.35 }}
      >
        Projects
      </motion.p>
      <motion.div
        className="w-full h-full grid grid-cols-1 auto-rows-auto gap-y-10 sm:grid-cols-2 sm:gap-5"
        animate={{ y: 76 }}
        transition={{ delay: 3.35 }}
      >
        <Flashcard></Flashcard>
        <Website></Website>
      </motion.div>
    </motion.div>
  );
}
