import Navbar from "../components/navbar";
import Projects from "../components/projects";
import HeroSocials from "../components/herosocials";

export default function Home() {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <title>Kyle Huang</title>
      </head>
      <div className="w-full h-full overflow-x-hidden flex flex-col justify-start items-center font-sans font-bold space-y-20 mb-16">
        <Navbar></Navbar>
        <div className="w-full xl:w-4/6 flex flex-col pl-5 pr-16 sm:pr-56 md:pr-96 lg:pr-[825px] xl:pr-[500px] 2xl:pr-[700px]">
          <p className="text-3xl">Hello. I'm Kyle.</p>
          <p className="text-lg font-medium mt-3 mb-7">
            I'm current a junior studying Computer Science at Stony Brook
            University. I love working with tech and computers, whether it's
            software or hardware.
          </p>
          <HeroSocials></HeroSocials>
        </div>
        <Projects></Projects>
      </div>
    </html>
  );
}
