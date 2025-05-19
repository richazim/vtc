"use client";

import BackgroundCarousel from "@/components/BackgroundCarousel";
import { MyMultiStepForm } from "@/components/shared/MyMultiStepForm";

const Reservation = () => {
    
 return (
  <div className="section">
      <div className="flex flex-row">
          <section className="lg:w-[50%] lg:flex hidden lg:flex-row lg:items-center bg-gray">
              <BackgroundCarousel/>
          </section>

          <section className="relative w-screen lg:w-[50%] bg-gray-300 flex flex-col gap-[30px] items-center pt-[100px]">
              <h3 className="text-6xl">Find out</h3>
              <MyMultiStepForm/>
          </section>
      </div>
  </div>
 );
};

export default Reservation;