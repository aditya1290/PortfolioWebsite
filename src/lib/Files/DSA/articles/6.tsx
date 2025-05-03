import BlogQuestionListItem from "@/components/customUI/BlogInsider/BlogQuestionListItem";
import { ScrollLinks, WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";

const items: ScrollLinks[] = [
    {text:"Quiz",href:"quiz1"}
];
export default function Component(){
    return (
        <WithHeadingAndRightSidebar rightSidebarItem={items} heading={"Test your skills - 1"}>
            This Section will test your skills, with quiz/questions.
            <hr className="my-2" />
            <div className="list-decimal ml-6">
                {links.map((x,id) => <BlogQuestionListItem key={`Item-A-${id}`} id={id} notes={x.notes} href={x.href} text={x.text} /> )}
            </div>
        </WithHeadingAndRightSidebar>
    )
}

const links: ScrollLinks[] = [
    {text:"Attempt Quiz", href:"https://www.geeksforgeeks.org/quizzes/dsa-tutorial-logic-building/"},
    {text:"Power function",href:"https://leetcode.com/problems/powx-n/description/"},
    {text:"Power of 2",href:"https://leetcode.com/problems/power-of-two/description/", notes:"Expected Time: O(1)"},
    {text:"Convert to Base 7",href:"https://leetcode.com/problems/base-7/description/", notes: "Convert decimal to binary and vice-versa"},
    {text:"GCD of Array",href:"https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/"}
]