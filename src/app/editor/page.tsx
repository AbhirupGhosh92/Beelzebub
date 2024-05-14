'use client'
import HeaderBar from "@/components/HeaderBar";
import ScribeEditor from "@/components/editor/ScribeEditor";
import ScribeEditorAdvanced from "@/components/editor/ScribeEditorAdvanced";
import HeaderText from "@/components/text/HeaderText";
import { useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function EditorPage()
{

    const router = useRouter()

    return(
        <div>
            <HeaderBar>
                <div onClick={() => {
                    router.back()
                }} className="flex flex-row justify-center hover:cursor-pointer">
                    <HeaderText>Editor</HeaderText>
                </div>
            </HeaderBar>
            <div className="pt-40">
                <ScribeEditorAdvanced/>
            </div>
        </div>
    );
}