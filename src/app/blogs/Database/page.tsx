import { Intro } from "@/components/customUI/BlogSpace";
import { createBreadcrumb } from "@/components/customUI/CustomBreadcrumb";
import { WithNavbarAndSidebar } from "@/components/customUI/hook";
import { Pages } from "@/lib/Constants/PagesConstants";

export default function Javascript() {
    return (
        <WithNavbarAndSidebar currentPage={Pages.Blogs}>
            {createBreadcrumb("Home/Blogs/Database", "/blogs/Database")}
            <Intro text="Database Space" description="Coming Soon" />
        </WithNavbarAndSidebar>
    );
}