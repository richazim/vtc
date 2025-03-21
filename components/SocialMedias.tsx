"use client"

import Image from "next/image";

const SocialMedias = () => {
    return (
        <div className="flex flex-row gap-[15px]">
            <Image src="/assets/icons/twitter.svg" alt="twitter icon" width={24} height={24}/>
            <Image src="/assets/icons/facebook.svg" alt="facebook icon" width={24} height={24} />
            <Image src="/assets/icons/tiktok.svg" alt="tiktok icon" width={24} height={24} />
            <Image src="/assets/icons/instagram.svg" alt="instagram icon" width={24} height={24} />
        </div>
    );
};

export default SocialMedias;