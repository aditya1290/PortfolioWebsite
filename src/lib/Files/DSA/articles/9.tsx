import BlogQuestionListItem from "@/components/customUI/BlogInsider/BlogQuestionListItem";
import { ScrollLinks, WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";

const items:ScrollLinks[] = [
    {text:"Easy Problems", href:"easyP"},
    {text:"Medium Problems", href:"medP"},
    {text:"Hard Problems", href:"hardP"}
];

export default function Component(){
    return (
        <WithHeadingAndRightSidebar heading="Searching Practice Problems" rightSidebarItem={items}>
            <hr className="mb-2" />
            Here are some more questions to practice, especially on leetcode
            <div id="easyP" className="my-2 text-lg font-[500] font-serif">Easy Problems</div>
            <div className="list-decimal">
                {easyPractice.map((x,id) => <BlogQuestionListItem key={`Item-A-${id}`} id={id} notes={x.notes} href={x.href} text={x.text} /> )}
            </div>

            <div  id="medP" className="mt-4 mb-2 text-lg font-[500] font-serif">Medium Problems</div>
            <div className="list-decimal">
                {MediumPractice.map((x,id) => <BlogQuestionListItem key={`Item-B-${id}`} id={id} notes={x.notes} href={x.href} text={x.text} /> )}
            </div>

            <div id="hardP" className="mt-4 mb-2 text-lg font-[500] font-serif">Hard Problems</div>
            <div className="list-decimal">
                {HardPractice.map((x,id) => <BlogQuestionListItem key={`Item-C-${id}`} id={id} notes={x.notes} href={x.href} text={x.text} /> )}
            </div>
        </WithHeadingAndRightSidebar>
    );
}



const easyPractice:ScrollLinks[] = [
    {text:"Find square root", href:"https://leetcode.com/problems/sqrtx/"},
    {text:"Standard Binary Search Question", href:"https://leetcode.com/problems/binary-search/description/"},
    {text:"Find Insert postition", href:"https://leetcode.com/problems/search-insert-position/description/"},
    {text:"Infinite square root", href: "https://leetcode.com/problems/valid-perfect-square/description/"},
    {text:"Arrange the coins", href:"https://leetcode.com/problems/arranging-coins/description/"},
    {text:"Find Bad Version", href:"https://leetcode.com/problems/first-bad-version/description/"}
];

const MediumPractice:ScrollLinks[] = [
    {text:"First and Last Position", href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/", notes:"Expected: O(n) time"},
    {text:"Find peak element", href:"https://leetcode.com/problems/find-peak-element/description/"},
    {text:"Koko eating bananas", href:"https://leetcode.com/problems/koko-eating-bananas/description/"},
    {text:"Capacity to ship", href:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/"},
    {text:"Smallest Divisor", href:"https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/"},
    {text:"Kth element in sorted matrix", href:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/"},
    {text:"Search in a matrix I", href:"https://leetcode.com/problems/search-a-2d-matrix/description/"},
    {text:"Search in a matrix II", href:"https://leetcode.com/problems/search-a-2d-matrix-ii/description/"},
    {text:"Split largest array sum", href:"https://leetcode.com/problems/split-array-largest-sum/description/"},

]

const HardPractice:ScrollLinks[] = [
    {text:"Search in sorted rotated array - boss level", href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/"},
    {text:"Multiplication table", href:"https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/description/"}
]