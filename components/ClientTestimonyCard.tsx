import { ClientTestimonyCardProps } from "@/types/testimonies";
import Image from "next/image";

const ClientTestimonyCard = ({
                         name,
                         profile,
                         location,
                         comment
                     } : ClientTestimonyCardProps) => {
    return (
        <div className="border border-gray-200 bg-gray w-full p-[20px] text-black">
            <div className="lines">
                <Image src="/assets/icons/comment-card-design.svg" alt="" height={24} width={166} className="w-[100px] mx-auto border" />
            </div>

            <p className='mt-[10px]'>{comment}</p>

            <div className="profile flex flex-row items-center mt-[30px]">
                <Image src={profile} alt='' height={40} width={40} className='rounded-full' />

                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                    <h4 className="font-bold">{name}</h4>
                    <p><span>{location}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ClientTestimonyCard;