import HomeNav from "@/components/HomeNav";
import SafeArea from "@/components/SafeArea";
import Services from "@/pages/Services";
import WelcomeAndAbout from "@/pages/WelcomeAndAbout";
import Contact from "@/pages/Contact";
import Testimonies from "@/pages/Testimonies";
import Terms from "@/pages/Terms";


export default function Home() {
  return (
    <SafeArea>
        <HomeNav/>
        <WelcomeAndAbout/>
        <Services/>
        <Testimonies/>
        <Contact/>
        <Terms/>
    </SafeArea>
  );
}
