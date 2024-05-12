'use client'
import HeaderBar from "@/components/HeaderBar";
import ScribeEditor from "@/components/editor/ScribeEditor";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function EditorPage()
{
    return(
        <div>
            <HeaderBar>
                <ScribeEditor/>
            </HeaderBar>
        </div>
    );
}