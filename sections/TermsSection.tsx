"use client"
import Link from "next/link";

const Terms = () => {

    return (
        <div className="section flex lg:flex-row flex-col gap-3 py-[30px] lg:py-[20px] items-center justify-between app-default-padding-left app-default-padding-right bg-[#00171f] text-white text-[12px]">
            <p className="">
                <span>
                    © Copyright - 2025 - Site réalisé par 
                </span>

                <Link href="https://www.linkedin.com/in/azimsaibou" target="_blank">
                    <span className="border rounded-[5px] py-[2px] px-[4px]">
                        Azim
                    </span>
                </Link>
            </p>

            <div className="flex flex-row gap-[20px]">
                <span>Véhicules</span>
                <span>Prestations</span>
                <span>Couverture sur toute la France</span>
                <span>Mentions Légales</span>
                <span>Politique de confidentialité</span>
            </div>
        </div>
    );
};

export default Terms;