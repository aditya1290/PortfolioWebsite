import { CppCodingBlock, CppNote } from "@/components/customUI/BlogInsider/CodingBlock";
import { ScrollLinks, WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";
import { ApproachWriting, ComplexityWriting, QuestionWithLogic } from "@/components/customUI/BlogInsider/Question";
import Link from "next/link";

const items: ScrollLinks[] = [
    {text:"Numbers with 3 divisors", href:"divisor3"},
    {text:"calculating combinatorics nCr", href:"nCr"},
    {text:"Modular Exponential", href:"ModExp"},
    {text:"Sum of Divisors", href:"sumDiv"},
    {text:"Binary string divisible by 3",href:"binary3"},
    {text:"HIGHLIGHT", href:""},
    {text: "Important logics", href: "ImportantLogics"},
    {text: "Extra Questions", href:"ExtraQuestions"}

];

export default function Component(){
    return (

        <WithHeadingAndRightSidebar rightSidebarItem={items} heading={"Logic Building - Advanced"}>
            Lets move to advanced-concept-included logics, to ensure we know how to approach the variety of problems.
            <hr className="my-2" />

            {`Logic Building is actually Mathematics, thinking your idea on solving it.\nCoding is converting those ideas into code.\nThink through you idea well with all edge cases.`}
            <div className="mt-2" />
            <QuestionWithLogic id="divisor3" text="Q1. Numbers with exactly 3 divisors" href="https://www.geeksforgeeks.org/problems/3-divisors3942/1">
                <ApproachWriting leftText="Approach #1: " rightText={`for every divisor i, there will be parallel n/i value as divisor.\nThe only case when number of divisors are 3 is when number is a perfect square of a prime number(4,9..)\nCombining prime number, and squaring it`} />
                <div className="mt-2" />
                
                <p>Complexity to find count of numbers less than n, having 3 divisors. i.e. Calculating prime in O(M*log(log(M))) and O(M) space, and simply counting. Where M is sqrt(n). As we only need to find numbers till sqrt(n).</p>
                <ComplexityWriting time="O(M*log(log(M)))" space="O(M)" />
                <CppCodingBlock code={AAAB} buttonText="Solution to the attached question" heading="" defaultHide />

            </QuestionWithLogic>

            <QuestionWithLogic id="nCr" text="Q2. Calculate nCr" href="https://www.geeksforgeeks.org/problems/ncr1019/1">
                {`nCr can be reflected as fact(n)/(fact(n-r)*fact(r))\nHence, resolving it further, it can be done on O(n)`}
                <ComplexityWriting time="O(n)" space="O(1)" />
                <CppCodingBlock code={AAAC} heading="" defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="ModExp" text="Q3. Calculate Modular Exponential [(a^n) MOD M]" href="https://www.geeksforgeeks.org/problems/modular-exponentiation-for-large-numbers5537/1">
                <ApproachWriting leftText="Approach #1: " rightText="Going from 1 to n, keep multiplying a and take mod simultaneously. O(n)" />
                <ApproachWriting leftText="Approach #2: " rightText="Divide and conquer. divide the power by 2, take square of the result. O(logn)"/>
                <ComplexityWriting time="O(logn)" space="O(1) + recursion-stack" />
                <CppCodingBlock code={AAAD} heading="" defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="sumDiv" text="Q4. Sum 1 to n Divisors" href="https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1">
                <ApproachWriting leftText="Approach #1: " rightText="For every number from 1 to n, get the divisors and get the sum. O(nsqrt(n))" />
                <ApproachWriting leftText="Approach #2: " rightText="If you look closely, we just need to add (n-n%i) for each i from 1 to n" />
                <ComplexityWriting time="O(n)" space="O(1)" />
                <CppCodingBlock code={AAAE} heading="" defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="binary3" text="Q5. Check if binary number is divisible by 3" href="https://www.geeksforgeeks.org/problems/is-binary-number-multiple-of-30654/1">
                <ApproachWriting leftText="Approach #1: " rightText="Find the pattern and what each power depicts" />
                <ComplexityWriting time="O(n)" space="O(1)" />
                <CppCodingBlock code={AAAF} heading="" defaultHide />
            </QuestionWithLogic>

            <div id="ImportantLogics">
                <p className="my-4 text-lg font-[500] underline">Some Important logics that can be used in questions</p>
                <CppNote heading="• Divisibility by 3 [Large number(given as string) ]" code={`// (Sum of digits)%3 == 0`} />
                <CppNote heading="• Divisibility by 4 [Large number(given as string) ]" code={`// Last 2 digits are divisible by 4`} />
                <CppNote heading="• Divisibility by 4 [Large number(given as string) ]" code={`// End with 5 or 0`} />
                <CppNote heading="• Divisibility by 9 [Large number(given as string) ]" code={`// Last 3 digits are divisible by 8`} />
                <CppNote heading="• Divisibility by 11 [Large number(given as string) ]" code={ZZZZ} />
                <CppNote heading="• Catalan number formula" code={`fact(2n)/(fact(n)*fact(n+1))`} />
            </div>

            <div id="ExtraQuestions">
                <p className="text-lg font-semibold underline">Some Extra basic questions to do</p>
                {extraQuestions.map((x,val) => <div className="text-blue-900 py-1" key={`ExtraQuestion-#${val}`}>{val+1}. <Link className="hover:underline" target="_blank" href={x.questionLink}>{x.questionText}</Link></div>)}
            </div>

        </WithHeadingAndRightSidebar>
    );
}

const extraQuestions = [
    {questionText: "Catalan Number", questionLink:"https://www.geeksforgeeks.org/problems/nth-catalan-number0817/1"},
    {questionText: "Trailing zeroes in factorial", questionLink: "https://www.geeksforgeeks.org/problems/trailing-zeroes-in-factorial5134/1"},
    {questionText: "Angle in Clock hands", questionLink: "https://www.geeksforgeeks.org/problems/angle-between-hour-and-minute-hand0545/1"}
]

const AAAF = `bool isDivisible(string& s) {
    reverse(s.begin(),s.end());
    int sum = 0;
    for(int i = 0;i<s.length();i++){
        sum += (s[i]-'0')*(i%2 == 0 ? 1 : -1);
    }
    return sum%3 == 0;
}`;

const AAAE = `long long sumOfDivisors(long long n) {
    long long ans = 0;
    for(int i = 1;i<=n;i++){
        ans += n - n%i;
    }
    return ans;
}`;

const AAAD = `long long int PowMod(long long int x,long long int n,long long int M)
{
    if(n == 1)      return x%M;
    long long halfPower = PowMod(x,n/2,M)%M;
    halfPower = (halfPower * halfPower)%M;
    if(n%2 == 1)        halfPower = (halfPower*x)%M;
    return halfPower%M;
}`;

const AAAC = `int nCr(int n, int r) {
    long long int sum = 1;
    for(int i = 1;i<=r;i++){
        sum = sum * (n - r + i) / i;
    }
    return sum;
}`;

const ZZZZ = 
`// For a number ABC => expand it like A*100 + B*10 + C
// And calculate as
//     even power of 10 like 10^0, 10^2, 10^4, convert them into 1
//     odd power of 10 like 10, 1000, 10^5, convert them into -1
// So, A*100 + B*10 + c => A*1 + B*(-1) + C. 
// If this value is 0, then it is divisible by 11.  
    string num = "3063941726208111111121";
    int len = num.length();
    int value = 0;
    for(int i = len-1;i>=0;i--){
        value += ((len-1 - i)%2 == 0 ? 1 : -1) * (num[i]-'0');
    }
    if((value%11 + 11)%11 == 0)      cout<<"Divisble by 11";
    else                cout<<"Not Divisible";
`;

const AAAB =  `vector<int> threeDivisors(vector<long long> query, int q)
{
    long long int limit = sqrt(*max_element(query.begin(),query.end()))+1;
    vector<bool>isPrime(limit+1,true);
    vector<long long int>prime;
    
    for(int i = 2;i<=limit;i++){
        if(isPrime[i] == true){
            prime.push_back(i*i);
            for(int j = i*i;j<=limit;j+=i)      isPrime[j] = false;
        }
    }
    vector<int>ans;
    for(auto it: query){
        ans.push_back(upper_bound(prime.begin(),prime.end(),it)-prime.begin());
    }

    return ans;
    
    // Time Complexity: O(M*log(log(M))) + O(QlogM)
    // Space ComplexityL O(M) + O(Q + sqrt(M))
}`