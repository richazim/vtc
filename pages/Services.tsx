"use client";

import ParagraphTag from "@/components/ParagraphTag";

const services = [
    {
        id: 1,
        title: "Trajets longue distance",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus"
    },
    {
        id: 2,
        title: "Trajets longue distance",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus"
    },
]

const Services = () => {
    return (
        <div id="services" className="padding-top-nav">
            <h2 className="lg:text-[128px] sm:text-[90px] text-[50px] font-bold text-center text-yellow">Services</h2>

            <div className="h-padding flex flex-col gap-[20px]">
                <ParagraphTag title={services[0].title} paragraph={services[0].paragraph}/>
                <div className="flex flex-row gap-[20px]">
                    <ParagraphTag onColumn={true} title={services[0].title} paragraph={services[0].paragraph}/>
                    <ParagraphTag onColumn={true} title={services[0].title} paragraph={services[0].paragraph}/>
                </div>
            </div>
        </div>
    );
};

export default Services;