import { WithNavbar } from "@/components/customUI/hook";
import HomePagePhotoContent from "@/components/home/HomePagePhotoContent";
import ContentPrioritySection from "@/components/Rishi/ContentPart";
import { ContactLegalSection } from "@/components/Rishi/Footer";
import GoogleFormSection from "@/components/Rishi/googleFormPage";
import HeroSection from "@/components/Rishi/HeroPage";
import QrSection from "@/components/Rishi/QRPage";
import TradingStats from "@/components/Rishi/StatsPage";
import TopNavBar from "@/components/Rishi/TopNavBar";

// export default function Home() {
//   return (
//     <WithNavbar currentPage="">
//       <HomePagePhotoContent />
//     </WithNavbar>
//   );
// }

export default function Home(){
  return (
    <div className="">
      <TopNavBar />
      <div className="px-6">
        <HeroSection />
        <TradingStats />
        <QrSection binanceQrUrl="Binance_QR.jpg" whatsappQrUrl="WA_QR.jpg"  />
        <ContentPrioritySection />
        <GoogleFormSection />        
      </div>
      <div className="p-6 bg-gray-50">
        <ContactLegalSection />
      </div>
    </div>
  )
}
