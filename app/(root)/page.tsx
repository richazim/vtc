import Welcome from "@/pages/Welcome";
import HomeNav from "@/components/HomeNav";
import SafeArea from "@/components/SafeArea";


export default function Home() {
  return (
    <SafeArea>
        <HomeNav/>
        <Welcome/>
    </SafeArea>
  );
}
