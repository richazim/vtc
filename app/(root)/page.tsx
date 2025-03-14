import Welcome from "@/pages/Welcome";
import HomeNav from "@/components/HomeNav";


export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <div className="border 2xl:w-[1280px] 2x:px-0 w-screen">
          <HomeNav/>
          <Welcome/>
      </div>
    </div>
  );
}
