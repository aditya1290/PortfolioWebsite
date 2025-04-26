import { Intro } from "@/components/customUI/BlogSpace";
import { createBreadcrumb } from "@/components/customUI/CustomBreadcrumb";
import { WithNavbarAndSidebar } from "@/components/customUI/hook";
import { Pages } from "@/lib/Constants/PagesConstants";

export default function SystemDesign() {
    return (
        <WithNavbarAndSidebar currentPage={Pages.Blogs}>
            {createBreadcrumb("Home/Blogs/SystemDesign", "/blogs/SystemDesign")}
            <Intro text="System Design Space" description="Coming Soon" />
        </WithNavbarAndSidebar>
    );
}