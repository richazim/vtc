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

        const timeline = gsap.timeline({ 
            repeat: -1,
            defaults: { ease: "power2.inOut" }
        });

        words.forEach((item, index) => {
            if(index < words.length - 1){
                timeline.to(container, { 
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
        <div className="relative h-40 flex items-center justify-center w-full">
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
                            className={`text-left font-bold inline-block [&:nth-of-type(2n-1)]:text-yellow`}
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

// Defilement de mots avec gsap:
// Pendant chaque seconde, prendre le mot visible actuel et le déplacer vers le haut (la zone non visible)
// A la fin des mots, prendre le conteneur de tous ces mots et le redescendre vers le bas de la zone visible (pendant une seconde)
// Le processus est repété infiniment