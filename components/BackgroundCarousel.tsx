"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
    "/assets/images/image2.jpg",
    "/assets/images/image3.jpg",
    "/assets/images/image4.jpg",
    "/assets/images/image5.jpg",
];

export default function BackgroundCarousel() {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        images.forEach((_, index) => {
            tl.to(sectionRef.current, {
                onStart: () => setCurrentImage(index),
                duration: 4,
                ease: "power2.inOut",
            });
        });

    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Images en superposition */}
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={`Background ${index}`}
                    fill
                    className={`absolute object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                    priority={index === 0}
                />
            ))}
        </section>
    );
}
