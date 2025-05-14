import Image from "next/image";
import {useRef} from "react";

const ReservationTimeline = ({width} : {active: number, width: number}) => {
    const timelineRef = useRef(null);


    return (
        <div className="relative z-[2]" style={{ width: width }}>
            <div className="flex flex-row justify-between">
                <div className="w-[30px] h-[30px] bg-black flex items-center justify-center">
                    <Image src="/assets/icons/planning.svg" alt="" width={16} height={16} className=""/>
                </div>

                <div className="w-[30px] h-[30px] bg-black flex items-center justify-center">
                    <Image src="/assets/icons/planning.svg" alt="" width={16} height={16} className=""/>
                </div>

                <div className="w-[30px] h-[30px] bg-black flex items-center justify-center">
                    <Image src="/assets/icons/planning.svg" alt="" width={16} height={16} className=""/>
                </div>
            </div>

            <span ref={timelineRef} className="absolute top-1/2 -translate-y-1/2 w-full h-2 -z-[2] bg-red-700"></span>
        </div>
    )
}

export default ReservationTimeline;