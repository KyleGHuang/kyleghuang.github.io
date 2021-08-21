import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center gap-8 pb-1 font-sans font-bold bg-yellow-200 md:bg-white">
      <Navbar />
      <div className="bg-red-400 w-full h-full grid grid-cols-1 grid-rows-2 justify-start items-start p-8 md:grid-cols-2 md:grid-rows-1 md:h-1/2">
        <img
          src="/kyle.png"
          className="rounded-3xl shadow-2xl object-cover object-top transition duration-500 ease-in-out transform hover:scale-105 w-full h-72 md:w-auto md:h-full"
        />
        <div className="flex justify-start items-center">
          <p className=" text-gray-700 text-2xl select-none text-left">
            Yup, that's me. This picture was taken on The High Line in
            Manhattan. My name is Kyle Huang and I am a junior at Stony Brook
            University pursing a Bachelor of Science in Computer Science.
          </p>
        </div>
      </div>
    </div>
  );
}
