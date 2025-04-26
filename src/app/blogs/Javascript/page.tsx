import { Intro } from "@/components/customUI/BlogSpace";
import { createBreadcrumb } from "@/components/customUI/CustomBreadcrumb";
import { WithNavbarAndSidebar } from "@/components/customUI/hook";
import { Pages } from "@/lib/Constants/PagesConstants";

export default function Javascript() {
    return (
        <WithNavbarAndSidebar currentPage={Pages.Blogs}>
            {createBreadcrumb("Home/Blogs/Javascript", "/blogs/Javascript")}
            <Intro text="Javascript Space" description="Coming Soon" />
        </WithNavbarAndSidebar>
    );
}