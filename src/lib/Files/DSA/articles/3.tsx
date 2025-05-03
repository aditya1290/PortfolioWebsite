import { CppCodingBlock } from "@/components/customUI/BlogInsider/CodingBlock";
import { WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";
import { ComplexityWriting } from "@/components/customUI/BlogInsider/Question";

export default function Component(){
    return (
        <WithHeadingAndRightSidebar heading={"Time Complexity Practice"} rightSidebarItem={[]}>
            <p>Let's practice Time complexities</p>
            <hr className="my-2" />

            <CodingTester heading="Problem 1" code={A1} time="O(n)" space="O(1)" />
            <CodingTester heading="Problem 2" code={A2} time="O(n²)" space="O(1)" />
            <CodingTester heading="Problem 3" code={A3} time="O(logn)" space="O(1)" />
            <CodingTester heading="Problem 4" code={A4} time="O(logn)" space="O(1)" />
            <CodingTester heading="Problem 5" code={A5} time="O(3^n)" space="O(1)" />
            <CodingTester heading="Problem 6" code={A6} time="O(1)" space="O(1)" />
            <CodingTester heading="Problem 7" code={A7} time="O(sqrt(n))" space="O(1)" />
            <CodingTester heading="Problem 8" code={A8} time="O(sqrt(n))" space="O(1)" />
            <CodingTester heading="Problem 9" code={A9} time="O(n)" space="O(1)" />
            <CodingTester heading="Problem 10" code={A10} time="O(n^3)" space="O(1)" />
            <CodingTester heading="Problem 11" code={A11} time="O(nlogn)" space="O(1)" />
        </WithHeadingAndRightSidebar>
    )
}

const A11 = `for(int i = 1;i<=n;i++){\n\tfor(int j = 1;j<=n;j+=i)           count++;\n}`;
const A10 = `T(n) = T(n-1) + n(n-1)`;
const A9 = `for(int i = 1;i<=n;i++){\n\tfor(int j = 1;j<=n;j++){\n\t\tcount++;\n\t\tbreak;\n\t}\n}`
const A8 = `for(int i = 1;i*i<=n;i++)\n\tcount++;`
const A7 = `void function(int n){\n\tint i = 1,s=1;\n\twhile(s<=n)\n\t\ti++;\n\t\ts=s+i;\n\t}\n}`
const A6 = `T(n) = 2T(n-1) - 1`;
const A5 = `T(n) = 3T(n-1)`;
const A4 = `for(i = n;i>=1;i/=2)\n    m = m+2;`
const A3 = `for(i = 1;i<=n;i*=2)\n    m = m + 2;`;
const A2 = `for(i = 1;i<=n;i++)\n    for(j = 1;j<=n;j++)\n        m = m+2;\n    }\n}`;
const A1 = `for(i = 1;i<=n;i++){\n    m = m+2;\n}`;

type CodingTesterProp = {
    heading: string, 
    code: string,
    time: string, 
    space: string
}

const CodingTester = ({heading, code, time, space}: CodingTesterProp) => {
    return (
        <>
            <CppCodingBlock heading={heading} code={code} />
            <ComplexityWriting time={time} space={space} />
            <hr className="my-2" />
            
        </>
    )
}