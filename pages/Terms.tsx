"use client"

const Terms = () => {
    return (
        <div className="mt-[50px] h-[70px] flex lg:flex-row pt-[10px] lg:pt-0 flex-col items-center justify-between h-padding bg-[#00171f] text-white text-[12px]">
            <p className="">
                <span>
                    © Copyright - 2025 - Site réalisé par 
                </span>

                <span className="border rounded-[7px] p-[5px]">
                    Azim et Badjo
                </span>
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