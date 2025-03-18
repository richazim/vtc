import HomeNav from "@/components/HomeNav";
import SafeArea from "@/components/SafeArea";
import Services from "@/pages/Services";
import WelcomeAndAbout from "@/pages/WelcomeAndAbout";
import Contact from "@/pages/Contact";


export default function Home() {
  return (
    <SafeArea>
        <HomeNav/>
        <WelcomeAndAbout/>
        <Services/>
        <Contact/>
    </SafeArea>
  );
}
