import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden flex flex-col justify-start items-center font-sans font-bold">
      <Navbar />
      <div className="w-full h-full grid grid-cols-1 content-start items-center p-8 gap-8 md:p-12 md:gap-12 md:gap-y-72 lg:grid-cols-2 lg:mt-16 xl:w-5/6">
        <img
          src="/kyle.png"
          className="rounded-3xl shadow-xl object-cover object-top transition duration-500 ease-in-out transform hover:scale-105 w-full h-full md:object-center"
        />
        <p className="text-gray-700 text-xl select-none text-left xl:text-3xl">
          Yup, that's me. This picture was taken on The High Line in Manhattan.
          My name is Kyle Huang and I am a junior at Stony Brook University
          pursing a Bachelor of Science in Computer Science. Try opening this
          website on mobile or resize the window, its responsive! I am currently working on two
          projects listed below (working on that) and this website.
        </p>
      </div>
    </div>
  );
}
