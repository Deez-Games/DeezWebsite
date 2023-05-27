import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/main section/NewsLetter";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-between w-screen min-h-screen bg-[#292929] text-[#f0f8ff]">
        <Header />
        <MainSection />
        <Slide>
          <NewsLetter />
          <Footer />
        </Slide>
      </div>
    </div>
  );
}
