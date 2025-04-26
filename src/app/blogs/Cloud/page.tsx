import { Intro } from "@/components/customUI/BlogSpace";
import { createBreadcrumb } from "@/components/customUI/CustomBreadcrumb";
import { WithNavbarAndSidebar } from "@/components/customUI/hook";
import { Pages } from "@/lib/Constants/PagesConstants";

export default function Cloud() {
    return (
        <WithNavbarAndSidebar currentPage={Pages.Blogs}>
            {createBreadcrumb("Home/Blogs/Cloud", "/blogs/Cloud")}
            <Intro text="Cloud Space" description="Coming Soon" />
        </WithNavbarAndSidebar>
    );
}