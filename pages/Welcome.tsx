"use client";

import Image from "next/image";

const Home = () => {
    return (
        <header className="w-full h-screen flex flex-row border-[5px] overflow-hidden">
            <section className="lg:w-[50%]">

            </section>

            <section className="relative h-screen w-screen lg:w-[50%]  border-[5px] border-red-500 -z-10 bg-origin-border">
                <Image src="/assets/images/image1.jpg" alt="" width={4159} height={6239} style={{
                    objectFit: 'cover'
                }} />
            </section>
        </header>
    );
};

export default Home;