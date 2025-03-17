"use client";

import Image from "next/image";
import HomeRotatingText from "@/components/HomeRotatingText";

const Home = () => {
    return (
        <header className="w-full h-screen flex flex-row overflow-hidden">
            <section className="lg:w-[50%] lg:flex hidden lg:flex-row lg:items-center bg-[#F7F4ED]">
                {/*<p className="text-[50px] font-bold">VTC SANS LIMITE</p>*/}
                <HomeRotatingText/>
            </section>

            <section className="relative h-screen w-screen lg:w-[50%] -z-10 bg-origin-border">
                <Image src="/assets/images/image1.jpg" alt="" width={4159} height={6239} style={{
                    objectFit: 'cover',
                    height: '100%',
                }} />
            </section>
        </header>
    );
};

export default Home;