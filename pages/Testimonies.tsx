"use client"
import ClientTestimonyCard from "@/components/ClientTestimonyCard";

const clientComments = [
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/thumbnail-profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    },
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/thumbnail-profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    },
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/thumbnail-profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    }
]

const Testimonies = () => {
    return (
        <div className="padding-top-nav h-padding">
            <h2 className="text-[128px] font-bold text-center text-yellow">Avis des clients</h2>

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