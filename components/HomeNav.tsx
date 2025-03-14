import Link from "next/link";

const HomeNavItems = [
    {
        "title": "Accueil",
        "link": "/",
    },
    {
        "title": "À Propos",
        "link": "/",
    },
    {
        "title": "Services",
        "link": "/",
    },
    {
        "title": "Contact",
        "link": "/",
    }
]

const HomeNav = () => {
    return (
        <div className="fixed top-0 left-0 w-screen flex flex-row justify-center">
            <div className="absolute 2xl:w-[1280px] w-screen">
                <div className=" border flex flex-row justify-between items-center h-[70px] px-[80px]">
                    <div className="logo relative font-bold">
                        <span className="after:content-[''] after:absolute after:w-[5px] after:h-[5px] after:bg-yellow after:bottom-[5px] after:rounded-full">MrVTC</span>
                    </div>

                    <div className="links flex flex-row justify-between items-center">
                        {
                            HomeNavItems.map((item, index) => (
                                <Link key={index} href={item.link} className="py-[5px] px-[20px] mx-[20px] rounded-full hover:bg-yellow hover:text-white">
                                    <span>{item.title}</span>
                                </Link>
                            ))
                        }
                    </div>

                    <Link href="/" className="reservation py-[10px] px-[27px] font-semibold text-white bg-yellow rounded-full">
                        <span className="">Réservation</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeNav;