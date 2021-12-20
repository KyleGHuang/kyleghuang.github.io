export default function Website() {
  return (
    <div className="w-full h-full flex-none flex flex-col items-center">
      <div className="w-full aspect-[16/10] overflow-hidden">
        <div className="w-full aspect-[16/10] bg-gray-200 flex justify-center items-center hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/website.png"
            className="w-5/6 shadow-md border border-black/10"
          />
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-start mt-3 mb-5 gap-3">
        <div className="bg-white border border-black py-1 px-3">Next.js</div>
        <div className="bg-white border border-black py-1 px-3">React</div>
        <div className="bg-white border border-black py-1 px-3">
          Tailwind CSS
        </div>
      </div>
      <p className="font-medium">
        This is the site you are on right now! Over the winter of 2022, I
        decided to rework on my personal website. I focused on a responsive
        design, clean look, and a simple design. It utilizes GitHub Actions to
        automatically deploy on GitHub Pages. This project allowed me to
        practice and recall what I've leanred.
      </p>
    </div>
  );
}
