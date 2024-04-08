import { MainViewModel } from "@/app/MainViewModel";
import { List } from "postcss/lib/list";
import React, { ReactNode } from "react";

export default function Dropdown({viewModel,isVisible,dismissCallback} : Readonly<{viewModel : MainViewModel,isVisible : boolean,dismissCallback : () => void}>)
{

    const items : string[] = [
        "Sign Out",
        // "Profile",
        // "Options",
        // "Settings"
    ]

    function handleClick(index : number)
    {
        switch(index)
        {
            case 0 : viewModel.login()
        }

        dismissCallback()
    }

    const renderedList = items.map((item,index) => 
        <li key = {index} onClick={() => {
            viewModel.signout()
            dismissCallback()
        }}>
            <div className={`flex justify-center text-black h-8 items-center hover:cursor-pointer hover:bg-indigo-200 w-40`}>
            {item}
            </div>
            {items.length - 1 != index ? <div className="bg-black h-0.5"></div> : <></>}
        </li>
    )
       

    return(
        isVisible ?
        <div className="absolute justify-items-stretch rounded-md mr-8 mt-16 flex w-42 bg-white border-2 border-black shadow-md overflow-clip self-end right-0">
            <ul>{renderedList}</ul>
        </div>
        : <div></div>
    )
}