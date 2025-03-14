
import Image from "next/image";

const Home = () => {
    return (
        <header className="w-full h-screen flex flex-row border-[5px] overflow-hidden">
            <section className="w-[50%]">

            </section>

            <section className="h-full w-[50%]">
                <Image src="/assets/images/image1.jpg" alt="" width={4159} height={6239} style={{
                    objectFit: 'contain'
                }} />
            </section>
        </header>
    );
};

export default Home;