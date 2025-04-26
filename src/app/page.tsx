import { WithNavbar } from "@/components/customUI/hook";
import HomePagePhotoContent from "@/components/home/HomePagePhotoContent";

export default function Home() {
  return (
    <WithNavbar currentPage="">
      <HomePagePhotoContent />
    </WithNavbar>
  );
}
