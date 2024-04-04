import { useAppSelector } from "@/redux/store";
import { AuthRepositoryImpl } from "@/repository/AuthRepository";
import { AuthUseCase } from "@/usecase/AuthUseCase";
import { UserCredential } from "firebase/auth";
import React, { useEffect, useRef } from "react";

export default function HeaderBar({children} : Readonly<{children : React.ReactNode}>): React.JSX.Element{

    const authState  = useAppSelector((state) => state.home.user);
    console.log(JSON.stringify(authState?.user?.displayName ?? "empty data"))
    return(
        <div className="flex flex-row h-20 bg-white border-black border-b-4">
               {children}
        </div>
    )
}