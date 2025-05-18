"use client";
import HomeRotatingText from "@/components/HomeRotatingText";
import BackgroundCarousel from "@/components/BackgroundCarousel";

const Welcome = () => {

    return (
        <header id="welcome" className="section -z-10 relative w-full h-screen flex flex-row overflow-hidden">
            <section className="lg:w-[50%] lg:flex hidden lg:flex-row lg:items-center bg-gray">
                <HomeRotatingText/>
            </section>

            <section className="relative h-screen w-screen lg:w-[50%] bg-gray-300">
                <BackgroundCarousel/>
            </section>
        </header>
    );
};

export default Welcome;
