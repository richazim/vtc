"use client"
import ManPicture from "@/public/assets/images/image1.jpg"

import Image from "next/image";
import HomeRotatingText from "@/components/HomeRotatingText";
import {motion} from "framer-motion";

const Home = () => {

    return (
        <motion.div className="w-full h-screen flex flex-row -z-10 overflow-hidden">
            <section className="lg:w-[50%] lg:flex hidden lg:flex-row lg:items-center -z-10 bg-gray">
                {/*<p className="text-[50px] font-bold">VTC SANS LIMITE</p>*/}
                <HomeRotatingText/>
            </section>

            <section className="relative h-screen w-screen lg:w-[50%] -z-10 bg-origin-border">
                <Image src={ManPicture} priority alt="" width={4159} height={6239} placeholder={"blur"} style={{
                    objectFit: 'cover',
                    height: '100%',
                }} />
            </section>
        </motion.div>
    );
};

export default Home;