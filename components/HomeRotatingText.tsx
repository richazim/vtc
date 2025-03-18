"use client";
import {useEffect, useRef} from "react";
import { gsap } from "gsap";

export default function HomeRotatingText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        const words = wordsRef.current;
        const wordHeight = container!.clientHeight / words.length;

        const timeline = gsap.timeline({ // Créer une timeline d'animations où chaque animation est enchaînée.
            repeat: -1,
            defaults: { ease: "power2.inOut" }
        });

        words.forEach((item, index) => {
            if(index < words.length - 1){
                timeline.to(container, { // Etat final A Atteindre
                    y: `-=${wordHeight}px`,
                    duration: 1
                });
            }
        });

        timeline.to(container, {
            y: `0`,
            duration: 1
        });
    }, []);

    return (
        <div className="relative h-40 flex items-center justify-center h-margin-left w-full">
            <h1 className="xl:text-3xl lg:text-2xl">
                MrVTC, c’est{" "}

                <span className="relative inline-block overflow-hidden h-8">
                  <div ref={containerRef} className="container flex flex-col items-start  text-3xl">
                    {["LE CONFORT", "LA RAPIDITÉ", "LE RESPECT", "LA PONCTUALITÉ", "LA GARANTIE"].map((word, index) => (
                        <div
                            key={word}
                            ref={(el) => {
                                if(el !== null) {
                                    wordsRef.current[index] = el;
                                }
                            }}
                            className={`rotating-word text-left font-bold inline-block`}
                        >
                            {word}
                        </div>
                    ))}
                  </div>
                </span>
            </h1>
        </div>
    );
}
