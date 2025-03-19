"use client";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ManPicture from "@/public/assets/images/image1.jpg";
import Image from "next/image";

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
        <div ref={aboutRef} id="about" className="w-screen font-bold h-padding padding-top-nav h-screen overflow-hidden bg-black">

            <div className="flex flex-row">
                <section className="w-[50%]">
                    <Image src={ManPicture} priority alt="Man" width={5760} height={3840} placeholder="blur" className="object-cover h-full w-full" />
                </section>

                <section className="w-[50%] text-white">
                    {/*<p>À Propos</p>*/}
                    <h2 className="text-center text-5xl text-yellow">Qui suis-je?</h2>
                    <p>Chauffeur vtc privée basé à Angers Passionné par mon métier, je mets mon expérience et mon professionnalisme à votre service pour vous garantir des trajets confortables, sécurisés et agréables.</p>
                    <p>Fort d’une solide connaissance des routes angevines et des environs, je vous assure une prise en charge ponctuelle et un itinéraire optimisé pour vos déplacements personnels ou professionnels.</p>
                    <p>ue ce soit pour un transfert vers une gare, un aéroport ou un rendez-vous important, je veille à ce que votre voyage soit serein et sans encombre.</p>
                    <p>Mon véhicule, soigneusement entretenu et équipé pour votre confort, vous offre une expérience de transport haut de gamme. À bord, vous trouverez divers services à votre disposition : rafraîchissements, chargeurs, connexion Wi-Fi et bien plus encore pour rendre votre trajet des plus agréables.</p>
                    <p>Ma priorité ? Votre satisfaction et votre tranquillité d’esprit. Disponibilité, discrétion et courtoisie sont les maîtres-mots de mon engagement envers vous. Réservez votre course dès maintenant et laissez-moi vous conduire en toute sérénité.</p>

                </section>
            </div>

        </div>
    );
};

export default About;
