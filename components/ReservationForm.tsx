"use client";

import ReservationInput from "@/components/ReservationInput";
import {motion} from "framer-motion";

const fruits = [
    "apple",
    "banana",
    "blueberry",
    "grapes",
    "pineapple",
]
const backgroundVariant = {
    hover: {
        backgroundColor: "#FFC108",
        color: "#FFF",
        transition: {
            delay: 0.1,
            duration: 0.5,
            ease: [0.19, 1, 0.22, 1],
        },
    },
    initial:{
        backgroundColor: "#FFC108",
        color: "#000"
    }
};

const ReservationForm = ({step, setStep, width}: {step: number, setStep: React.Dispatch<React.SetStateAction<number>>, width: number}) => {
 return (
  <form className="border flex flex-col gap-[20px]" style={{width: width}}>
      {(function(){
          switch(step){
              case 1:
                  return (
                      <>
                          <ReservationInput placeholder="Select a fruit" items={fruits}/>

                          <ReservationInput placeholder="Select a fruit" items={fruits}/>

                          <ReservationInput placeholder="Select a fruit" items={fruits}/>

                          <ReservationInput placeholder="Select a fruit" items={fruits}/>

                          <ReservationInput placeholder="Select a fruit" items={fruits}/>

                          <div className="flex flex-row justify-between gap-[20px]">
                              <ReservationInput placeholder="Select a fruit" items={fruits}/>
                              <ReservationInput placeholder="Select a fruit" items={fruits}/>
                          </div>
                      </>
                  )
              case 2:
                  return (
                      <>
                          <ReservationInput placeholder="Select a fruit" items={fruits}/>
                      </>
                  )
              case 3:
                  return (
                      <>
                          <ReservationInput placeholder="Select a fruit" items={fruits}/>
                      </>
                  )
              default:
                  return;
          }
      })()}

      <motion.button type="submit" className="w-full p-[10px] border cursor-pointer font-bold" variants={backgroundVariant} initial="initial" whileHover="hover">Submit</motion.button>
  </form>
 );
};

export default ReservationForm;