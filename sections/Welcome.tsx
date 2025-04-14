"use client";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import HomeRotatingText from "@/components/HomeRotatingText";
import BackgroundCarousel from "@/components/BackgroundCarousel";

const Welcome = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const anim = gsap.to(sectionRef.current,
            {
                rotate: 90,
                scrollTrigger:
                    {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
            }
        );

        return () => {
            anim.kill(); // clean-up si le composant est démonté
        };
    }, []);

    return (
        <header ref={sectionRef} id="welcome" className="section -z-10 relative w-full h-screen flex flex-row overflow-hidden">
            <section className="lg:w-[50%] lg:flex hidden lg:flex-row lg:items-center bg-gray">
                <HomeRotatingText/>
            </section>

            <section className="relative h-screen w-screen lg:w-[50%] bg-gray-300">
                <BackgroundCarousel/>
            </section>
        </header>
    );
};

export default Welcome;
