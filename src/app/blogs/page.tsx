import { createBreadcrumb } from "@/components/customUI/CustomBreadcrumb";
import { WithNavbarAndSidebar } from "@/components/customUI/hook";
import { sectionBox } from "@/components/customUI/sectionBox";
import { sectionManager } from "@/lib/Constants/BlogSections";
import { Pages } from "@/lib/Constants/PagesConstants";
import { BLOGS_DESCRIPTION, MY_KNOWLEDGE } from "@/lib/stringLiterals";

export default function Blogs(){
    return (
        <WithNavbarAndSidebar currentPage={Pages.Blogs} >
            {createBreadcrumb("Home/Blogs", "/blogs")}
            <h1 className="my-4 text-xl font-semibold">{MY_KNOWLEDGE}</h1>
            <p  className="mb-4 font-normal text-gray-500">{BLOGS_DESCRIPTION}</p>
            <div className="flex flex-wrap gap-2">
                {sectionManager.map(x=> sectionBox(x))}
            </div>
        </WithNavbarAndSidebar>
    )
}