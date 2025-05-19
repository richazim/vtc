"use client";

import ContactForm from "@/components/ContactForm";
import ContactAddress from "@/components/ContactAddress";
import LocationMap from "@/components/LocationMap";

const Contact = () => {
    
    return (
        <div id="contact" className="section padding-top-nav app-default-padding-left app-default-padding-right">
            <h2 className="lg:text-[128px] sm:text-[90px] text-[50px] font-bold text-center text-yellow">Me Contacter</h2>
            <p className="text-center font-light">Besoin d’un renseignement ou d’un devis ? </p>
            <p className="text-center pb-[40px]">Je suis à votre disposition.</p>

            <div className="grid lg:grid-cols-3 grid-col-1 gap-x-[70px] gap-y-[20px] mb-[50px]">
                <ContactForm containerStyle="lg:row-span-2 lg:col-span-2" />
                <ContactAddress/>
                <LocationMap/>
            </div>
        </div>
    );
};

export default Contact;