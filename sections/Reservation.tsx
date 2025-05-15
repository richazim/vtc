"use client";

// import ReservationForm from "@/components/ReservationForm";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import MyMultiStep from "@/components/shared/MyMultiStep";
// import ReservationTimeline from "@/components/ReservationTimeline";
// import {useState} from "react";

// const WIDTH = 500;

const Reservation = () => {
    // const [step, setStep] = useState(1);
 return (
  <div className="section">
      <div className="flex flex-row">
          <section className="lg:w-[50%] lg:flex hidden lg:flex-row lg:items-center bg-gray">
              <BackgroundCarousel/>
          </section>

          <section className="relative w-screen lg:w-[50%] bg-gray-300 flex flex-col gap-[30px] items-center pt-[100px]">
              <h3 className="text-6xl">Reservation</h3>
              {/* <ReservationTimeline active={step} width={WIDTH - 250}/>
              <ReservationForm step={step} setStep={setStep} width={WIDTH - 100}/> */}
              <MyMultiStep/>
          </section>
      </div>
  </div>
 );
};

export default Reservation;