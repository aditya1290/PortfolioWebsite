import BlogQuestionListItem from "@/components/customUI/BlogInsider/BlogQuestionListItem";
import { CppCodingBlock, CppNote } from "@/components/customUI/BlogInsider/CodingBlock";
import { ScrollLinks, WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";
import { ApproachWriting, ComplexityWriting } from "@/components/customUI/BlogInsider/Question";

const items:ScrollLinks[] = [
    {text:"Linear Search", href:"linearS"},
    {text:"Binary Search", href:"binaryS"},
    {text:"Inbuilt function", href:"inbuilt"},
    {text:"Practice Problems", href:"practice"}
];

export default function Component(){
    return (
        <WithHeadingAndRightSidebar heading="Searching Practice Problems" rightSidebarItem={items}>            
            There are mainly 2 search Algorithms. One is Linear and other is Binary Search.
            <hr className="my-2" />
            
            <span id="linearS" className="text-lg font-[600]">1. Linear Search</span><br />

            Pre-requisite: Given an array, and searching a value on linear-basis by iterating through each value.
            <ComplexityWriting time="O(n)" space="O(1)" />

            <CppNote code={AAAA} heading="" />

            < hr />

            <span id="binaryS" className="text-lg font-[600]">2. Binary Search</span><br />

            <p>Pre-requisite: Given a sorted, and searching a value. The array should be <b>Sorted.</b></p>
            <p>For the range [l..r] where l and r are indexes, we will check if middle element of the range is equal to value.</p>
            <p>If yes, we can return true.</p>
            <p>If no, then dividing the array in 2 halves, and taking the left one if value is smaller than mid value. Else right one if value is greater than mid value.</p>
            <br />


            <ApproachWriting leftText="Approach #1: " rightText="We can do it using recursion in O(logn)" />
            <ApproachWriting leftText="Approach #2: " rightText="Try going for in-line while loop, without recursion. This would reduce additional stack memory" />
            <br />
            <CppCodingBlock code={AAAB} heading="" defaultHide />

            <p><b>Note: </b>If you look closely, we used <b>left + (right-left)/2 </b> to generate mid element. To avoid overflow of the integer limit.</p>

            <br />
            
            <span id="inbuilt" className="text-lg font-[600] mb-2">3. In-built functions</span><br />
            <p><b>lower_bound: </b>used to find first element in the given range that is greater than or equal to the given value.</p>
            <p><b>upper_bound: </b>used to find first element in the given range that is greater than the given value.</p>
            <br />
            <CppNote code={`int position1 = lower_bound(a.begin(),a.end(),value)-a.begin();\nint position2 = upper_bound(a.begin(),a.end(),value)-a.begin();`} heading="" />

            <hr />
            <br />
            <span id="practice" className="text-lg font-[600] mb-2">Practice Problems</span><br />
            <div className="list-decimal">
                {practice.map((x,id) => <BlogQuestionListItem key={`Item-A-${id}`} id={id} notes={x.notes} href={x.href} text={x.text} /> )}
            </div>
        </WithHeadingAndRightSidebar>
    );
}

const practice: ScrollLinks[] = [
    {text:"Largest number in an array", href:"https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1", notes: "Try for O(n) only"},


    {text:"Search in sorted and rotated array", href:"https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/", notes: "Excellent Question"},

    {text:"Minimum in sorted and rotated array", href:"https://www.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array3611/1"},
    {text:"Maximum in sorted and rotated array", href:"https://www.geeksforgeeks.org/maximum-element-in-a-sorted-and-rotated-array/"},


    {text:"Median of sorted array I", href:"https://www.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-same-size/1", notes: "Using Binary search"},
    {text:"Median of sorted array II", href:"https://www.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1", notes: "Using Binary search"},

    {text:"Aggressive Cows",href: "https://www.geeksforgeeks.org/problems/aggressive-cows/1", notes:"Standard trap for candidates"}
]

const AAAB = `bool find() {
    vector<int>arr = {1,2,3,4,5,6,7,8,9,10};
    int value = 3;
    
    int left = 0,right = arr.size()-1;
    while(left <= right){
        int mid = left + (right-left)/2;            // Not (left+right)/2, due to overflow issues
        if(arr[mid] == value)       return true;
        if(arr[mid] > value)        right = mid-1;
        else                        left = mid+1;
    }
    return false;
}`;


const AAAA = `bool find(){
    vector<int>arr = {1,3,5,4,2};
    int value = 4;

    for(auto it: arr){
        if(it == value)     return true;
    }
    return false;
}`;