import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { HERO_CAROUSEL_IMAGES } from "@/constants/images";

export default function BackgroundCarousel() {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        HERO_CAROUSEL_IMAGES.forEach((_, index) => {
            tl.to(sectionRef.current, {
                onStart: () => setCurrentImageIndex(index), 
                duration: 4,
                ease: "power2.inOut",
            });
        });

    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center">
            {HERO_CAROUSEL_IMAGES.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={`Background ${index}`}
                    fill
                    className={`absolute object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                    priority={index === 0} 
                /> 
            ))}
        </section>
    );
}

// Défilement d'images

// Les images sont superposées au debut
// Le premier image d'index 0 est rendu opaque et les autres rendu transparent
// Le timeline doit animer la section que les images couvrent
// Pour chaque 4s le timeline rend opaque l'image suivante et rend transparent l'image actuel
// Pour chaque 4s le timeline anime la section (pour considérer le changement d'apparition et de disparition apporté sur lui)
// Lecon: Indiquer au timeline de gsap de se repeter infiniment sait lui dire de refaire les meme choses qu'on a branché sur lui.

