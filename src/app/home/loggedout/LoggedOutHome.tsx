import { useScroll } from "framer-motion";
import SectionFirstHome from "./SectionFirstHome";
import SectionSecondHome from "./SectionSecondHome";
import SectionThirdHome from "./SectionThirdHome";
import SectionFourthHome from "./SectionFourthHome";
import SectionFifthHome from "./SectionFifthHome";
import { useEffect, useRef } from "react";

export default function LoggedOutHome()
{

    /* Excerpts from gemeni
    Show drafts
Heading: Binary Banter: Decoding the Digital Deluge, One Blog Post at a Time
Sections:

1. Introduction

Subheading: We're here to translate the ones and zeroes into something your brain can (almost) understand.
2. Blog Theme:

Subheading: Tech, Machine Learning, and Computer Science: It's more exciting than it sounds (we promise!).
3. Description of Content:

Subheading: Dive deep into the latest advancements, unravel coding mysteries, and explore how AI is changing the world (or at least making our toasters smarter).
4. Witty One-Liners:

Subheading: Because even robots need a good laugh... probably.
Subheading: We're all about fixing bugs, not catching them (unless they're delicious, protein-packed cricket snacks).
5. About Us:

Subheading: We're a bunch of tech enthusiasts who believe knowledge is power (and caffeine is fuel).
    
    */
    return(
        <div>
        <div className="w-full h-screen bg-pink-500">
            <SectionFirstHome/>
        </div>
        <div className="w-full h-screen bg-yellow-500">
        <SectionSecondHome/>
        </div>
        <div className="w-full h-screen bg-green-500">
        <SectionThirdHome/>
        </div>
        <div className="w-full h-screen bg-indigo-500">
        <SectionFourthHome/>
        </div>
        <div className="w-full h-screen bg-red-600">
        <SectionFifthHome/>
        </div>
        </div>
    );
}