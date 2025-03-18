'use client'

import { useEffect } from "react";
import Lenis from 'lenis';
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";

export default function WelcomeAndAbout() {

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time: DOMHighResTimeStamp) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main className="">
            <Welcome/>
            <About/>
        </main>
    );
}