export default function Flashcard() {
  return (
    <div className="w-full h-full flex-none flex flex-col items-center">
      <div className="w-full aspect-[16/10] bg-gray-200 flex justify-center items-center">
        <img
          src="/flashcard.png"
          className="w-5/6 shadow-md border border-black/10"
        />
      </div>
      <div className="w-full flex flex-row flex-wrap justify-start mt-3 mb-5 gap-3">
        <div className="bg-white border border-black py-1 px-3">Next.js</div>
        <div className="bg-white border border-black py-1 px-3">React</div>
        <div className="bg-white border border-black py-1 px-3">
          Tailwind CSS
        </div>
        <div className="bg-white border border-black py-1 px-3">Prisma</div>
        <div className="bg-white border border-black py-1 px-3">PostgreSQL</div>
      </div>
      <p className="font-medium">
        This was my first full-stack project in collaboration with a group of
        four. Over the summer of 2020, I've learned some basics of front-end,
        had my first taste of web development, and explored version control with
        Git. Communication was important in order to resolve, plan, and to get
        ideas across.
      </p>
    </div>
  );
}
