"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import ReservationSelectInput from "../ReservationSelectInput";
import MyDayPicker from "./MyDayPicker";
import { RESERVATION_INPUT_ITEMS_FOR_NUMBER_OF_PEOPLE } from "@/constants/reservation_items";
import { ReservationTextInput } from "../ReservationTextInput";
// import MyPlacesAutocompleter from "./MyPlacesAutocompleter";

export const MyMultiStepForm = () => {
  const [step, setStep] = useState<number>(0);
  const totalSteps = 3;
  // const [formOne, setFormOne] = useState({
  //   departure_address: "",
  //   arrival_address: "",
  //   departure_day: ""
  // })

  const form = useForm();

  const { handleSubmit, reset } = form;

  const onSubmit = async (formData: unknown) => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      console.log(formData);
      setStep(0);
      reset();

      toast.success("Form successfully submitted");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={cn(
                "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
                index <= step ? "bg-primary" : "bg-primary/30",
                index < step && "bg-primary"
              )}
            />
            {index < totalSteps - 1 && (
              <div
                className={cn(
                  "w-8 h-0.5",
                  index < step ? "bg-primary" : "bg-primary/30"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardDescription>Étape {step + 1}</CardDescription>
          {step === 2 && <CardTitle>Récapitulatif:</CardTitle>}
        </CardHeader>

        <CardContent>
          {step === 0 && (
            <div>
              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-y-4"
                >
                  <ReservationTextInput type="text" placeholder="Adresse de départ"/>

                  <ReservationTextInput type="text" placeholder="Adresse de destination"/>

                  <MyDayPicker />

                  <ReservationTextInput type="time" placeholder="Heure de départ"/>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      className="font-medium"
                      size="sm"
                      onClick={handleBack}
                      disabled={step === 0}
                    >
                      Back
                    </Button>
                    <Button type="submit" size="sm" className="font-medium">
                      {(step as number) === 2 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}

          {step === 1 && (
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
                <div className="flex flex-col gap-[10px]">
                  <ReservationSelectInput
                      placeholder="Nombre de personnes"
                      items={RESERVATION_INPUT_ITEMS_FOR_NUMBER_OF_PEOPLE}
                  />
                  <ReservationTextInput type="text" placeholder="Votre nom"/>
                  <ReservationTextInput type="text" placeholder="Votre prénom"/>
                  <ReservationTextInput type="email" placeholder="Votre email"/>
                  <ReservationTextInput type="tel" placeholder="Votre téléphone"/>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    className="font-medium"
                    size="sm"
                    onClick={handleBack}
                    disabled={(step as number) === 0}
                  >
                    Back
                  </Button>
                  <Button type="submit" size="sm" className="font-medium">
                    {(step as number) === 2 ? "Submit" : "Next"}
                  </Button>
                </div>
              </form>
            </Form>
          )}

          {step === 2 && (
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
                
                <div id="recapitulatif" className="text-[0.9]">
                  <div className="text-center text-[1.4rem] leading-6 italic bg-[#d8c084] h-[40px] flex justify-center items-center">
                    Récapitulatif
                  </div>

                  <table>
                    <thead>
                      <tr className="">
                        <td className="bg-[#b6b6b6] w-64">Infos 1</td>
                        <td className=""></td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="">
                        <td className="underline">Date</td>
                        <td className="">à</td>
                      </tr>
                      <tr className="">
                        <td className="underline">Départ</td>
                        <td className="">Paris, France</td>
                      </tr>
                      <tr className="">
                        <td className="underline">Arrivée</td>
                        <td className="">Paris, France</td>
                      </tr>
                    </tbody>
                  </table>

                  <table>
                    <thead>
                      <tr className="">
                        <td className="bg-[#b6b6b6] w-64">Infos 2</td>
                        <td className=""></td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="">
                        <td className="underline">Nom</td>
                        <td className="">...</td>
                      </tr>
                      <tr className="">
                        <td className="underline">Prénom</td>
                        <td className="">...</td>
                      </tr>
                      <tr className="">
                        <td className="underline">Email</td>
                        <td className="">Paris, France</td>
                      </tr>
                      <tr className="">
                        <td className="underline">Téléphone</td>
                        <td className="">...</td>
                      </tr>
                      <tr className="">
                        <td className="underline">Nombre de personnes</td>
                        <td className="">...</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    className="font-medium"
                    size="sm"
                    onClick={handleBack}
                    disabled={(step as number) === 0}
                  >
                    Back
                  </Button>
                  <Button type="submit" size="sm" className="font-medium">
                    {step === 2 ? "Submit" : "Next"}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
