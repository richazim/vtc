"use client";

import ContactForm from "@/components/ContactForm";
import ContactAddress from "@/components/ContactAddress";
import LocationMap from "@/components/LocationMap";

const Contact = () => {
    return (
        <div id="contact" className="padding-top-nav h-padding">
            <h2 className="text-[128px] font-bold text-center text-yellow">Me Contacter</h2>
            <p className="text-center font-light">Besoin d’un renseignement ou d’un devis ? </p>
            <p className="text-center pb-[40px]">Je suis à votre disposition.</p>

            <div className="grid grid-cols-3 gap-x-[70px] gap-y-[20px] mb-[50px]">
                <ContactForm containerStyle="row-span-2 col-span-2" />
                <ContactAddress/>
                <LocationMap/>
            </div>
        </div>
    );
};

export default Contact;