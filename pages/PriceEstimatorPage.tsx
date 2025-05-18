import SafeArea from "@/components/SafeArea";
import HomeNav from "@/components/HomeNav";
import Terms from "@/sections/Terms";
import Reservation from "@/sections/Reservation";

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