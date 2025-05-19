"use client";
import ManPicture from "@/public/assets/images/image1.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="section w-screen mt-[70px] app-default-padding-left app-default-padding-right padding-top-nav padding-bottom-nav bg-[#333333]"
    >
      <div className="flex lg:flex-row flex-col gap-[30px] lg:gap-0">
        <section className="lg:w-[50%] w-full border">
          <Image
            src={ManPicture}
            priority
            alt="Man"
            width={5760}
            height={3840}
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </section>

        <section className="lg:w-[50%] w-full text-white flex flex-col text-left">
          <div className="flex flex-col gap-[5px]">
              <h2 className=" text-yellow">
                Chauffeur privé VTC Lille
              </h2>

              <div className="flex flex-col gap-[10px]">
                <h3 className="capitalize text-4xl">happy managers <span className="font-bold">MRVTC</span></h3>
                <p className="text-[20px] text-[#efefef]">Lille et région hauts-De-France</p>
              </div>
          </div>
 
          <div className="flex flex-col gap-[20px] text-[15px] mt-[20px]">
            <p className="text-[#a8a8a8]">
              Chauffeur vtc privée basé à Angers Passionné par mon métier, je
              mets mon expérience et mon professionnalisme à votre service pour
              vous garantir des trajets confortables, sécurisés et agréables.<br/>
              Chauffeur vtc privée basé à Angers Passionné par mon métier, je
              mets mon expérience et mon professionnalisme à votre service pour
              vous garantir des trajets confortables, sécurisés et agréables.
            </p>
            <p className="text-[#a8a8a8]">
              Fort d’une solide connaissance des routes angevines et des
              environs, je vous assure une prise en charge ponctuelle et un
              itinéraire optimisé pour vos déplacements personnels ou
              professionnels.
            </p>
            <p className="text-[#a6a6a6] font-bold">
              Que ce soit pour un transfert vers une gare, un aéroport ou un
              rendez-vous important, je veille à ce que votre voyage soit serein
              et sans encombre.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
