"use client";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            aboutRef.current,
            { scale: 0.8, rotate: 5 },
            { scale: 1, rotate: 0, scrollTrigger: { trigger: aboutRef.current, start: "top bottom", end: "top center", scrub: true } }
        );
    }, []);

    return (
        <section ref={aboutRef} id="about" className="h-screen w-screen flex justify-center items-center text-9xl font-bold">
            <p>À Propos</p>
        </section>
    );
};

export default About;
