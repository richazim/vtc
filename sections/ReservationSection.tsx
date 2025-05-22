"use client";

import { MyMultiStepForm } from "@/components/shared/MyMultiStepForm";
import Image from "next/image";

const Reservation = () => {
    
 return (
  <div className="">
      <div className="flex flex-row">
          <section className="lg:w-[50%] lg:flex hidden lg:flex-row lg:items-center bg-black">
              {/* <div className="absolute h-[20rem] w-[20rem] overflow-hidden ">
                <BackgroundCarousel/>
              </div> */}
              <div className="w-full h-full relative">
                <Image src="/assets/images/image1.jpg" alt="" fill={true} className="object-cover min-h-full"/>
              </div>
          </section>

          <section className="relative w-screen lg:w-[50%] bg-gray-300 flex flex-col gap-[30px] items-center pt-[100px] min-h-[94vh]">
              <div className="text-center text-white">
                <h3 className="text-6xl">Réservez une course</h3>
                <h4>VTC Toulon – VTC Hyères – VTC St tropez</h4>
              </div>
              <MyMultiStepForm/>
          </section>
      </div>
  </div>
 );
};

export default Reservation;