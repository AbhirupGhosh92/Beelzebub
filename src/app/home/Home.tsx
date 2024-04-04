import Image from "next/image";
import HeaderBar from "@/components/HeaderBar";
import { AuthRepositoryImpl } from "@/repository/AuthRepository";
import { AuthUseCase } from "@/usecase/AuthUseCase";
import { useRef, useEffect } from "react";
import { MainViewModel } from "../MainViewModel";

export default function Home() {

  let loggedIn = useRef(false)
  let popupShown = useRef(false)
  const viewModel = new MainViewModel()

  useEffect(() => {
      viewModel.startup()
  },[])

  return (
    <div>
      <HeaderBar>
        <text className="flex ml-16 text-4xl text-black self-center">Gauntlet</text>
      </HeaderBar>
    </div>
  );
}
