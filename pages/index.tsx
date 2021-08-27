import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col justify-start items-center gap-8 font-sans font-bold">
      <Navbar />
      <div className="w-full h-full grid grid-cols-1 grid-rows-2 content-start items-start px-8 md:grid-cols-2 md:grid-rows-1 md:h-5/6 md:p-12 md:gap-12">
        <img
          src="/kyle.png"
          className="rounded-3xl shadow-xl object-cover object-top transition duration-500 ease-in-out transform hover:scale-105 w-full h-5/6 md:w-full md:h-full"
        />
        <span className="text-gray-700 text-xl select-none text-left pb-6 self-start md:text-4xl md:pb-0 md:self-center">
          Yup, that's me. This picture was taken on The High Line in Manhattan.
          My name is Kyle Huang and I am a junior at Stony Brook University
          pursing a Bachelor of Science in Computer Science. I am currently
          working on two projects listed below (working on listing it below) and
          this website. Try opening this website on mobile, its responsive!
        </span>
      </div>
    </div>
  );
}
