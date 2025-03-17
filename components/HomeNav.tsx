"use client"
import Link from "next/link";
import {AnimatePresence} from "framer-motion";
import MobileNav from "@/components/MobileNav";
import {useState} from "react";
import {HomeNavItems} from "@/constants";

const HomeNav = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-screen flex flex-row justify-center z-10">
            <div className="absolute 2xl:w-[1280px] w-screen">
                <div className="flex flex-row justify-between items-center h-[70px] h-padding relative">

                    <div className="logo relative font-bold">
                        <span className="after:content-[''] after:absolute after:w-[5px] after:h-[5px] after:bg-yellow after:bottom-[5px] after:rounded-full">MrVTC</span>
                    </div>

                    <div className="links xl:flex flex-row justify-between items-center w-[60%] hidden">
                        {
                            HomeNavItems.map((item, index) => (
                                <Link key={index} href={item.link} className="py-[5px] px-[20px] mx-[20px] rounded-full hover:bg-yellow hover:text-white">
                                    <span>{item.title}</span>
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