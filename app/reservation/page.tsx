import SafeArea from "@/components/SafeArea";
import HomeNav from "@/components/HomeNav";
import Terms from "@/pages/Terms";
import Reservation from "@/pages/Reservation";

const Page = () => {
    return (
        <div id="reservation">
            <SafeArea>
                <HomeNav/>
                <Reservation/>
                <Terms/>
            </SafeArea>
        </div>
    );
};

export default Page;