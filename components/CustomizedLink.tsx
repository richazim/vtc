import Link from 'next/link';
import { motion } from 'framer-motion';


export const slide = {
    initial: {x: 80},
    enter: (i: number) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: (i: number) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}



// @ts-expect-error: ignore the props types
export default function CustomizedLink({data, isActive, setSelectedIndicator}) {

    const { title, link, index} = data;

    return (
        <motion.div className='link' onMouseEnter={() => {setSelectedIndicator(link)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={isActive ? "open" : "closed"} className='link-indicator'></motion.div>
            <Link href={`/${link}`}>{title}</Link>
        </motion.div>
    )
}