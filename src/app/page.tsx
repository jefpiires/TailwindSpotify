import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
