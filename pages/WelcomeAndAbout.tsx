"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import {gsap} from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";

export default function WelcomeAndAbout() {
    const container = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // Ajuster la vitesse
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Effet smooth
            smoothWheel: true,
            syncTouch: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy(); // Nettoyage à la suppression du composant
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        });
    }, []);

    return (
        <main ref={container} className="relative">
            <Welcome />
            <About />
        </main>
    );
}
