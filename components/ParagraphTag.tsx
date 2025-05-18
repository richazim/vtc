"use client";

import Image from "next/image";

const ServiceCard = ({onColumn, title, paragraph} : {onColumn?: boolean, title: string, paragraph: string}) => {
    return (
        <div className={`${(onColumn) ? 'flex flex-col' : 'flex flex-row w-full'} w-full bg-gray `}>
            <div className={`${(onColumn) ? 'w-full' : 'w-1/2'} overflow-hidden`}>
                <Image src="/assets/images/image2.jpg" alt="" width={5760} height={3840} className="object-cover"/>
            </div>

            <div className={`${(onColumn) ? 'w-full' : 'w-1/2'} overflow-hidden`}>
                <h4 className="text-[40px] font-bold text-center p-[40px]">{title}</h4>
                <p className="p-[10px]">{paragraph}</p>
            </div>
        </div>
    );
};

export default ServiceCard;