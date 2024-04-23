import { useEffect, useLayoutEffect, useRef, useState } from "react"
import "../home.css"

import { MotionValue, animate, motion, stagger, useAnimate, useAnimationControls, useScroll, useTransform } from "framer-motion"
import { json } from "stream/consumers";

export default function SectionFirstHome({addeddelay = 0} : Readonly<{addeddelay? : number}>)
{
    let firstHeader = useRef(null)
    const { scrollYProgress } = useScroll({container : firstHeader});

   
    let secondHeader = useRef(null)
    const [sectionOneVisible,setSectionOneVisible] = useState(false)
    const [sectionTwoVisible,setSectionTwoVisible] = useState(false)

    const angle = useTransform(scrollYProgress,[0,1],[0,3600])

    const control = useAnimationControls()

    const mainHeaderVariant = {
        initial : {opacity : 0},
        animated : {opacity : 1,transition : {
            staggerChildren : 0.01,
            damping : 3
        }}
    }


    const header1 = "A great place to show your creative side".split(" ")
    const header2 = "A single place where you can express your ideas and let others dive deep into your creative mind"
      
    function Word({children,range,progress} : Readonly<{children : React.ReactNode,range : [number,number],progress : MotionValue<number>}>)
    {
        const opacity = useTransform(progress,range,[0,1])
        return  <motion.span style={{opacity : opacity}} className = "mr-1 text-2xl">{children}</motion.span>
    }

    return(
        <div className="flex flex-col items-center w-full">
            <div ref={firstHeader} className="fixed mt-24">{header1.map((item,i) => {
                const start = i/header1.length
                const end = start + (1/header1.length)
                return <Word key={i} range={[start,end]} progress={scrollYProgress}>{item}</Word>
            })}</div>
        </div>
    )
}