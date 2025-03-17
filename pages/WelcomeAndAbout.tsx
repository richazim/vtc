'use client';

import { useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";

export default function WelcomeAndAbout() {

    const container = useRef(null);
    const { scrollYProgress }: {scrollYProgress: MotionValue<number>} = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time: DOMHighResTimeStamp) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main ref={container} className="">
            <Welcome scrollYProgress={scrollYProgress}/>
            <About scrollYProgress={scrollYProgress}/>
        </main>
    );
}