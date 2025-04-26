import { Intro } from "@/components/customUI/BlogSpace";
import { createBreadcrumb } from "@/components/customUI/CustomBreadcrumb";
import { WithNavbarAndSidebar } from "@/components/customUI/hook";
import { Pages } from "@/lib/Constants/PagesConstants";

export default function CyberSecurity() {
    return (
        <WithNavbarAndSidebar currentPage={Pages.Blogs}>
            {createBreadcrumb("Home/Blogs/CyberSecurity", "/blogs/CyberSecurity")}
            <Intro text="Cyber Security Space" description="Coming Soon" />
        </WithNavbarAndSidebar>
    );
}