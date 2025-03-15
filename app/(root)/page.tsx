import Welcome from "@/pages/Welcome";
import HomeNav from "@/components/HomeNav";
import SafeArea from "@/components/SafeArea";
import About from "@/pages/About";
import Services from "@/pages/Services";


export default function Home() {
  return (
    <SafeArea>
        <HomeNav/>
        <Welcome/>
        <About/>
        <Services/>
    </SafeArea>
  );
}
