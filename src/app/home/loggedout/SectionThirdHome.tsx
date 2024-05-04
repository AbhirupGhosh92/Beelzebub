import { useEffect, useLayoutEffect, useRef, useState } from "react"
import "../home.css"

import { motion, useScroll, useTransform } from "framer-motion"

export default function SectionThirdHome({addeddelay = 0} : Readonly<{addeddelay? : number}>)
{

    const { scrollYProgress } = useScroll();

    let firstHeader = useRef(null)
    let secondHeader = useRef(null)
    const [sectionOneVisible,setSectionOneVisible] = useState(false)
    const [sectionTwoVisible,setSectionTwoVisible] = useState(false)

    const angle = useTransform(scrollYProgress,[0,1],[0,3600])


    const header1 = "Smart suggestions based on your choices and preferences"
    const header2 = "You will get unique suggestions and summaries based on your preferences"


    return(
        <div>
        <div className="flex flex-col items-center w-full">
            <div className="h-40"></div>
            <div className="text-2xl md:text-4xl ml-5 mr-5 md:ml-20 md:mr-20 text-center">
                <motion.div ref={firstHeader} animate = {sectionOneVisible ? {opacity : 1,y:[-20 , 0]} : {}} 
                onViewportEnter={() => setSectionOneVisible(true)}
                viewport={{once : true}}
                initial = {{opacity : 0}} transition={{duration : 0.5}}>
                    {header1}
                </motion.div>
                </div>
            <div className="text-md md:text-xl mt-5 ml-5 mr-5 md:ml-20 md:mr-20 text-center">
            <motion.text ref={secondHeader}  className="" animate = {sectionOneVisible ? {opacity : 1,y:[-20 , 0]} : {}} 
                viewport={{once : true}}
                onViewportEnter={() => setSectionOneVisible(true)}
                initial = {{opacity : 0}} transition={{duration : 0.5,delay : 0.5}}>
               {header2}
            </motion.text></div>
        </div>
        </div>
    )
}