import Navbar from "../components/navbar";
import Projects from "../components/projects";
import HeroSocials from "../components/herosocials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <title>Kyle Huang</title>
      </head>
      <div className="w-full overflow-x-hidden flex flex-col justify-start items-center font-sans font-bold space-y-20 pb-24 xl:pb-36">
        <Navbar></Navbar>
        <motion.div
          className="w-full xl:w-4/6 flex flex-col pr-16 sm:pr-56 md:pr-96 lg:pr-[800px] xl:pr-[500px] 2xl:pr-[750px]"
          animate={{ x: 20 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-3xl">Hello. I'm Kyle.</p>
          <motion.p
            className="text-lg font-medium"
            animate={{ y: 12 }}
            transition={{ delay: 0.65 }}
          >
            I'm current a junior studying Computer Science at Stony Brook
            University. I love working with tech and computers, whether it's
            software or hardware.
          </motion.p>
          <HeroSocials></HeroSocials>
        </motion.div>
        <Projects></Projects>
      </div>
    </html>
  );
}
