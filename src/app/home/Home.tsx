
"use client"

import Image from "next/image";
import { AuthRepositoryImpl } from "@/repository/AuthRepository";
import { AuthUseCase } from "@/usecase/AuthUseCase";
import { useRef, useEffect, useState } from "react";
import { MainViewModel } from "../MainViewModel";
import HeaderBar from "@/components/HeaderBar";
import HeaderText from "@/components/text/HeaderText";
import ProfileImage from "@/components/image/ProfileImage";
import { useAppSelector } from "@/redux/store";
import Dropdown from "@/components/dropdown/Dropdown";


export default function Home() {

  let loggedIn = useRef(false)
  let popupShown = useRef(false)
  const viewModel = new MainViewModel()
  const userCred  = useAppSelector((state) => state.home.user);

  useEffect(() => {
      viewModel.startup()
  },[])

  const [showProfileMenu,setShowProfileMenu] = useState(false)

  function profilePicClicked()
  {
    setShowProfileMenu(!showProfileMenu)
  }

  function clickedOutside()
  {
    setShowProfileMenu(false)
  }

  return (
    <div>
      <Dropdown isVisible = {showProfileMenu} viewModel={viewModel} dismissCallback={() => {
        setShowProfileMenu(false)
      }}/>
      <HeaderBar>
        <div className= "flex w-full flex-row place-content-between">
      <HeaderText>Gauntlet</HeaderText>
      <ProfileImage url={userCred?.user?.photoURL ?? ""} callback={profilePicClicked}/>
      </div>
      </HeaderBar>
      </div>
  );
}
