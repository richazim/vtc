"use client"
import { motion } from 'framer-motion';
import {usePathname} from "next/navigation";
import {useState} from "react";
import {HomeNavItems} from "@/constants";
import CustomizedLink from "@/components/CustomizedLink";
import Curve from "@/components/Curve";

export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

const MobileNav = () => {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className='nav-menu -z-10'>
            <div className='nav-body'>
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className='nav-nav '>

                    <div className='nav-header'>
                        <p>Menu</p>
                    </div>

                    {
                        HomeNavItems.map( (data, index) => {
                            return <CustomizedLink key={index} data={{...data, index}} isActive={selectedIndicator == data.link} setSelectedIndicator={setSelectedIndicator}></CustomizedLink>
                        })
                    }

                </div>
            </div>

            <Curve />
        </motion.div>
    );
};

export default MobileNav;