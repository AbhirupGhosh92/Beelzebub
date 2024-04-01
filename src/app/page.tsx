import Image from "next/image";
import HeaderBar from "./components/HeaderBar";

export default function Home() {
  return (
    <div>
      <HeaderBar>
        <text className="flex ml-16 text-4xl text-black self-center">Gauntlet</text>
      </HeaderBar>
    </div>
  );
}
