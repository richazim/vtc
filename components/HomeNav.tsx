"use client"
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import MobileNav from "@/components/MobileNav";
import {useEffect, useState} from "react";
import {HomeNavItems} from "@/constants";

const backgroundVariant = {
    initial: {
        backgroundColor: "transparent",
    },
    hover: {
        backgroundColor: "#FFC108",
        transition: {
            delay: 0.1,
            duration: 0.5,
            ease: [0.19, 1, 0.22, 1],
        },
    },
    animate: {
        backgroundColor: "transparent",
        transition: {
            delay: 0.1,
            duration: 0.5,
            ease: [0.19, 1, 0.22, 1],
        },
    },
};

const HomeNav = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = () => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        if(scrollTop >= 50){
            header?.classList.add('is-sticky')
        }else{
            header?.classList.remove('is-sticky')
        }
    };

    return (
        <div className="fixed top-0 left-0 w-screen flex flex-row justify-center z-10">
            <div className="absolute 2xl:w-[1280px] w-screen">
                <div className="header-section flex flex-row justify-between items-center nav-height h-padding relative">

                    <div className="logo relative font-bold">
                        <span className="after:content-[''] after:absolute after:w-[5px] after:h-[5px] after:bg-yellow after:bottom-[5px] after:rounded-full">MrVTC</span>
                    </div>

                    <div className="links xl:flex flex-row justify-between items-center w-[60%] hidden">
                        {
                            HomeNavItems.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <motion.div
                                        initial="initial"
                                        whileHover="hover"
                                        animate="animate"
                                        variants={backgroundVariant}
                                        className="py-[5px] px-[20px] mx-[20px] rounded-full"
                                    >
                                        <span className="font-bold">{item.title}</span>
                                    </motion.div>
                                </Link>
                            ))
                        }
                    </div>

                    <Link href="/reservation" className="reservation py-[10px] px-[27px] font-semibold text-white bg-yellow rounded-full">
                        <span className="">Réservation</span>
                    </Link>

                    <div className="block xl:hidden header">
                        <button className={"header-button"} onClick={() => {setIsActive(!isActive)}}>
                            <span className={`header-burger ${isActive ? 'header-burgerActive' : ""}`}>
                            </span>
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