
"use client"

import Image from "next/image";
import HeaderBar from "../components/HeaderBar";
import { AuthRepositoryImpl } from "@/repository/AuthRepository";
import { AuthUseCase } from "@/usecase/AuthUseCase";
import { useRef, useEffect } from "react";

export default function Home() {

  let loggedIn = useRef(false)
  const usecase = new AuthUseCase(new AuthRepositoryImpl())

  useEffect(() => {
      
      if(!loggedIn){
          usecase.login().then((cred) => {
              loggedIn.current = !loggedIn.current
          })
      }
  })

  return (
    <div>
      <HeaderBar>
        <text className="flex ml-16 text-4xl text-black self-center">Gauntlet</text>
      </HeaderBar>
    </div>
  );
}
