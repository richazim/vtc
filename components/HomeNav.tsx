"use client"
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import MobileNav from "@/components/MobileNav";
import {useEffect, useRef, useState} from "react";
import { navLinkBackgroundVariant } from "@/lib/motion/color_switch";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { BREAKPOINTS } from "@/constants/breakpoints";
import { links } from "@/data/links";

const HomeNav = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const width = useWindowWidth();

    useEffect(() => {
        const stick = () => {
            const scrollTop = window.scrollY;
            if(scrollTop >= 70){
                headerRef.current?.classList.add('is-sticky')
            }else{
                headerRef.current?.classList.remove('is-sticky')
            }
        };

        window.addEventListener('scroll', stick);

        return () => {
            window.removeEventListener('scroll', stick);
        };
    });

    useEffect(() => {
        if(isActive && width >= BREAKPOINTS.desktop){
            setIsActive(false)
        }
    }, [width, isActive])

    


    return (
        <div className="fixed top-0 left-0 w-screen flex flex-row justify-center z-10">
            <div className="absolute 2xl:w-[1280px] w-screen">
                <div ref={headerRef} className="header-section flex flex-row justify-between items-center nav-height h-padding relative">

                    <div className="relative font-bold">
                        <span className="after:content-[''] after:absolute after:w-[5px] after:h-[5px] after:bg-yellow after:bottom-[5px] after:rounded-full">MrVTC</span>
                    </div>

                    <div className="xl:flex flex-row justify-between items-center w-[60%] hidden">
                        {
                            links.home.sections.map((item) => (
                                <Link key={item.label} href={`/${item.href}`} className="anchor-link">
                                    <motion.div
                                        whileHover="hover"
                                        variants={navLinkBackgroundVariant}
                                        className="py-[5px] px-[20px] mx-[20px] rounded-full"
                                    >
                                        <span className="font-bold">{item.label}</span>
                                    </motion.div>
                                </Link>
                            ))
                        }
                    </div>

                    <Link href={links.price_estimator.path} className="reservation py-[10px] px-[27px] font-semibold text-white bg-yellow rounded-full">
                        <span>Trajectoire</span>
                    </Link>

                    <div className="block xl:hidden header">
                        <button className="w-[50px] h-[50px] rounded-full bg-[var(--color-yellow)] cursor-pointer flex justify-center items-center" onClick={() => {setIsActive(!isActive)}}>
                            <div className="flex flex-col items-center relative">
                                <span className={"absolute h-[1px] w-[20px] rounded-full bg-white transition-transform  " + `${isActive ? ' rotate-45' : 'top-[-5px]'}`}></span>
                                <span className={"absolute h-[1px] w-[20px] rounded-full bg-white transition-transform  " + `${isActive ? ' scale-x-0' : ''}`}></span>
                                <span className={"absolute h-[1px] w-[20px] rounded-full bg-white transition-transform " + `${isActive ? ' -rotate-45' : 'top-[5px]'}`}></span>
                            </div>
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {isActive && <MobileNav />}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
};

export default HomeNav;

// Button Hambuger :
// Positionner les 3 lignes les uns sur les autres (grace a absolute) dans un conteneur relatif de taille reduit a un point
// Losque isActive est faux, positionner de manière espacé les 3 lignes 
// Lorsque isActive est vrai, ramener les 3 lignes a se superposer puis faire tourner la 1ére ligne à 45deg par rapport a son centre, faire ...