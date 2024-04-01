'use client'
import { AuthRepositoryImpl } from "@/repository/AuthRepository";
import { AuthUseCase } from "@/usecase/AuthUseCase";
import React, { useEffect, useRef } from "react";

export default function HeaderBar({children} : Readonly<{children : React.ReactNode}>): React.JSX.Element{

    
    return(
        <div className="flex flex-row h-20 bg-white border-black border-b-4">
               {children}
        </div>
    )
}