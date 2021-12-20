import Flashcard from "./flashcard";
import Website from "./website";

export default function Projects() {
  return (
    <div className="w-full h-full grid grid-cols-1 auto-rows-auto px-5 gap-y-10 xl:w-4/6">
      <p className="text-3xl underline underline-offset-8 decoration-black decoration-2 text-left">
        Projects
      </p>
      <div className="w-full h-full grid grid-cols-1 auto-rows-auto gap-y-10 sm:grid-cols-2 sm:gap-5">
        <Flashcard></Flashcard>
        <Website></Website>
      </div>
    </div>
  );
}
