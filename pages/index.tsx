import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center gap-8 pb-1 font-sans font-bold">
      <Navbar />
      <div className="w-screen h-1/2 flex flex-row flex-inital justify-start p-6 pl-14 pr-8 gap-12">
        <img
          src="/kyle.png"
          className="rounded-3xl shadow-2xl object-cover transition duration-500 ease-in-out transform hover:scale-105"
        />
        <div className="flex justify-center items-center">
          <p className=" text-gray-700 text-4xl select-none text-left">
            Yup, that's me. This picture was taken on The High Line in
            Manhattan. My name is Kyle Huang and I am a junior at Stony Brook
            University pursing a Bachelor of Science in Computer Science.
          </p>
        </div>
      </div>
    </div>
  );
}
