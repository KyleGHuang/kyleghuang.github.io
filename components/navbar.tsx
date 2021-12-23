import Dropdown from "./dropdown";

export default function Navbar() {
  return (
    <div className="w-full h-16 flex flex-none justify-center items-center text-black border-b border-black">
      <a
        href="https://kyleghuang.github.io"
        className="text-lg w-full px-5 flex flex-none xl:w-4/6"
      >
        Kyle Huang
      </a>
    </div>
  );
}
