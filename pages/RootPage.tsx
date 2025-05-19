"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import {gsap} from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Welcome from "@/sections/WelcomeSection";
import About from "@/sections/AboutSection";
import HomeNav from "@/components/HomeNav";
import Services from "@/sections/ServicesSection";
import Testimonies from "@/sections/TestimoniesSection";
import Contact from "@/sections/ContactSection";
import Terms from "@/sections/TermsSection";
import SafeArea from "@/components/SafeArea";
import 'lenis/dist/lenis.css'


export default function Root() {
    const containerRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 1,
        });

        const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

        const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
            if (target && lenis) {
                lenis.scrollTo(target, { offset: 0 });
            }
        };

        anchors.forEach(anchor => anchor.addEventListener("click", handleClick));


        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });

        gsap.ticker.lagSmoothing(0);

        gsap.registerPlugin(ScrollTrigger); // Enregistrer ScrollTrigger avant de l'utiliser

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        });

        return () => {
            anchors.forEach(anchor => anchor.removeEventListener("click", handleClick));
        };
    }, []);

    return (
        <div ref={containerRef}>
            <SafeArea>
                <HomeNav/>
                <Welcome/>
                <About/>
                <Services/>
                <Testimonies/>
                <Contact/>
                <Terms/>
            </SafeArea>
        </div>
    );
}
