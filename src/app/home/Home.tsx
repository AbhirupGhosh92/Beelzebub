
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
import SignInButton from "@/components/buttons/SignInButton";
import LoggedOutHome from "./loggedout/LoggedOutHome";


export default function Home() {

  let loggedIn = useRef(false)
  let popupShown = useRef(false)
  const viewModel = new MainViewModel()
  const userCred  = useAppSelector((state) => state.home.user);

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
    <div onClick=  {showProfileMenu ? () => {
        clickedOutside()
    } : undefined}>
      <Dropdown isVisible = {showProfileMenu} viewModel={viewModel} dismissCallback={() => {
        setShowProfileMenu(false)
      }}/>
      <HeaderBar>
        <div className= "flex w-full flex-row place-content-between">
      <HeaderText>Gauntlet</HeaderText>
      { userCred ?
        <ProfileImage url={userCred?.user?.photoURL ?? ""} callback={profilePicClicked}/>
        : <div className="flex items-center mr-8"><SignInButton callback={() => {
          viewModel.startup()
        }}>Sign In</SignInButton></div>
      }
      </div>
      </HeaderBar>
      {
        userCred ? <div/> : <LoggedOutHome/>
      }
      </div>
  );
}
