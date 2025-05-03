import { ScrollLinks, WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";

const items:ScrollLinks[] = [];

export default function Component(){
    return (
        <WithHeadingAndRightSidebar rightSidebarItem={items} heading="Basic Sorting Algorithm">
            This page contains 3 basic sorting algorithms, bubble sort, selection algorithm, insertion algorithm
            <hr className="mb-2" />

            <div id="Bubble sort" className="my-2 text-lg font-[500] font-serif">Easy Problems</div>
            


        </WithHeadingAndRightSidebar>
    );
}