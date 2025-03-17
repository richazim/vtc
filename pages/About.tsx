"use client";

import {motion, MotionValue, useTransform} from "framer-motion";

const About = ({scrollYProgress} : {scrollYProgress: MotionValue<number>}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

    return (
        <motion.div style={{scale, rotate}} id="about" className="h-screen w-screen text-9xl font-bold flex justify-center items-center ">
            <p>À Propos</p>
        </motion.div>
    );
};

export default About;