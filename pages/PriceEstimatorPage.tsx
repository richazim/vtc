import SafeArea from "@/components/SafeArea";
import HomeNav from "@/components/HomeNav";
import Terms from "@/sections/TermsSection";
import Reservation from "@/sections/ReservationSection";

const PriceEstimatorPage = () => {
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

export default PriceEstimatorPage;