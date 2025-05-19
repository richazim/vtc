"use client"
import ClientTestimonyCard from "@/components/ClientTestimonyCard";
import { clientComments } from "@/data/comments";

const Testimonies = () => {
    return (
        <div className="section padding-top-nav app-default-padding-left app-default-padding-right">
            <h2 className="lg:text-[128px] sm:text-[90px] text-[50px] font-bold text-center text-yellow">Avis des clients</h2>

            <div className="cards grid lg:grid-cols-3 md:grid-cols-2  gap-[50px]">
                {
                    clientComments.map((comment, index) => (
                        <ClientTestimonyCard key={index} name={comment.name} profile={comment.profile} location={comment.location} comment={comment.comment}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonies;