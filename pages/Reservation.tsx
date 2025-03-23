"use client";

import ReservationForm from "@/components/ReservationForm";
import BackgroundCarousel from "@/components/BackgroundCarousel";

const Reservation = () => {
 return (
  <div className="">
      <div className="flex flex-row">
          <section className="lg:w-[50%] lg:flex hidden lg:flex-row lg:items-center bg-gray">
              <BackgroundCarousel/>
          </section>

          <section className="relative w-screen lg:w-[50%] bg-gray-300 flex justify-center items-center">
              <ReservationForm/>
          </section>
      </div>
  </div>
 );
};

export default Reservation;