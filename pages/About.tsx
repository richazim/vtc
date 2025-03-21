"use client";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ManPicture from "@/public/assets/images/image1.jpg";
import Image from "next/image";
import SocialMedias from "@/components/SocialMedias";

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            aboutRef.current,
            { scale: 0.8, rotate: 5 },
            { scale: 1, rotate: 0, scrollTrigger: { trigger: aboutRef.current, start: "top bottom", end: "top center", scrub: true } }
        );
    }, []);

    return (
        <div ref={aboutRef} id="about" className="w-screen h-padding padding-top-nav padding-bottom-nav overflow-hidden bg-black">

            <div className="flex lg:flex-row flex-col gap-[30px] lg:gap-0">
                <section className="lg:w-[50%] w-full">
                    <Image src={ManPicture} priority alt="Man" width={5760} height={3840} placeholder="blur" className="object-cover h-full w-full" />
                </section>

                <section className="lg:w-[50%] w-full text-white flex flex-col gap-[30px] items-center">
                    {/*<p>À Propos</p>*/}
                    <h2 className="text-center text-5xl text-yellow font-bold">Qui suis-je?</h2>
                    <div className="h-padding  flex flex-col gap-[15px] text-gray text-[15px]">
                        <p className="bg-gray text-black p-[10px]">Chauffeur vtc privée basé à Angers Passionné par mon métier, je mets mon expérience et mon professionnalisme à votre service pour vous garantir des trajets confortables, sécurisés et agréables.</p>
                        <p className="bg-gray text-black p-[10px]">Fort d’une solide connaissance des routes angevines et des environs, je vous assure une prise en charge ponctuelle et un itinéraire optimisé pour vos déplacements personnels ou professionnels.</p>
                        <p className="bg-gray text-black p-[10px]">Que ce soit pour un transfert vers une gare, un aéroport ou un rendez-vous important, je veille à ce que votre voyage soit serein et sans encombre.</p>
                        <p className="bg-gray text-black p-[10px]">Mon véhicule, soigneusement entretenu et équipé pour votre confort, vous offre une expérience de transport haut de gamme. À bord, vous trouverez divers services à votre disposition : rafraîchissements, chargeurs, connexion Wi-Fi et bien plus encore pour rendre votre trajet des plus agréables.</p>
                        <p className="bg-gray text-black p-[10px]">Ma priorité ? Votre satisfaction et votre tranquillité d’esprit. Disponibilité, discrétion et courtoisie sont les maîtres-mots de mon engagement envers vous. Réservez votre course dès maintenant et laissez-moi vous conduire en toute sérénité.</p>
                    </div>

                    <SocialMedias/>
                </section>
            </div>

        </div>
    );
};

export default About;
