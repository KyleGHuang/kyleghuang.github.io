import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col justify-start items-center gap-8 font-sans font-bold">
      <Navbar />
      <div className="w-full h-full grid grid-cols-1 grid-rows-2 content-start items-start px-8 md:gap-12 lg:grid-cols-2 lg:grid-rows-1 lg:h-5/6 lg:p-12">
        <img
          src="/kyle.png"
          className="rounded-3xl shadow-xl object-cover object-top transition duration-500 ease-in-out transform hover:scale-105 w-full h-5/6 md:h-full md:object-center"
        />
        <span className="text-gray-700 text-xl select-none text-left pb-6 self-start md:text-2xl lg:text-3xl lg:pb-0 lg:self-center xl:text-4xl">
          Yup, that's me. This picture was taken on The High Line in Manhattan.
          My name is Kyle Huang and I am a junior at Stony Brook University
          pursing a Bachelor of Science in Computer Science. Try opening this
          website on mobile, its responsive! I am currently working on two
          projects listed below (working on listing it below) and this website.
        </span>
      </div>
    </div>
  );
}
