"use client";

import ReservationInput from "@/components/ReservationInput";
import {motion} from "framer-motion";
import DepartureCityInput from "./DepartureCityInput";
import DatePicker from "./DatePicker";

const fruits = [
    "apple",
    "banana",
    "blueberry",
    "grapes",
    "pineapple",
]
const vehicleTypes =
    {
        placeholder: "Type de véhicule",
        items: [
            {
                value: "berline",
                item: "Berline",
            },
            {
                value: "SUV",
                item: "SUV",
            },
            {
                value: "Vans",
                item: "Vans",
            }
        ]
    }

const passengerTypes =
    {
        placeholder: "Nombre de passagers",
        items: [
            {
                value: "zero",
                item: 0,
            },
            {
                value: "one",
                item: 1,
            },
            {
                value: "two",
                item: 2,
            }
        ]
    }

const waysTypes =
    {
        placeholder: "Allez-simple ou aller-retour",
        items: [
            {
                value: "one_way",
                item: "Allez-simple",
            },
            {
                value: "Allez-retour",
                item: "Round Trip",
            }
        ]
    }
    
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


    const submit = () => {
        setStep(step + 1);
    }
 return (
  <form className="border flex flex-col gap-[20px]" style={{width: width}}>
      {(function(){
          switch(step){
              case 1:
                  return (
                      <>
                          <ReservationInput placeholder={vehicleTypes.placeholder} items={vehicleTypes.items}/>

                          <ReservationInput placeholder={passengerTypes.placeholder} items={passengerTypes.items}/>

                          <ReservationInput placeholder={waysTypes.placeholder} items={waysTypes.items}/>

                          <DepartureCityInput placeholder="Lieu de départ"/>

                          <DepartureCityInput placeholder="Lieu d'arrivée"/>

                          <div className="flex flex-row justify-between gap-[20px]">
                              <DatePicker placeholder="Date de départ"/>
                              <DatePicker placeholder="Date de retour"/>
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

      <motion.button type="submit" className="w-full p-[10px] border cursor-pointer font-bold" variants={backgroundVariant} initial="initial" whileHover="hover" onClick={submit}>Submit</motion.button>
  </form>
 );
};

export default ReservationForm;