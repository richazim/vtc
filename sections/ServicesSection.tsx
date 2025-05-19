"use client";
import ServiceCard from "@/components/ParagraphTag";
import { services } from "@/data/services";

const Services = () => {

    return (
        <div id="services" className="section padding-top-nav">
            <h2 className="lg:text-[120px] text-[70px] font-bold text-center text-yellow">Services</h2>

            <div className="flex flex-col gap-[20px] app-default-padding-left app-default-padding-right">
                <ServiceCard title={services[0].title} paragraph={services[0].paragraph}/>
                <div className="flex flex-row gap-[20px]">
                    <ServiceCard onColumn={true} title={services[0].title} paragraph={services[0].paragraph}/>
                    <ServiceCard onColumn={true} title={services[0].title} paragraph={services[0].paragraph}/>
                </div>
            </div>
        </div>
    );
};

export default Services;