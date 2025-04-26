import { CppCodingBlock, CppNote, NormalNote } from "@/components/customUI/BlogInsider/CodingBlock";
import { ScrollLinks, WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";
import { ApproachWriting, ComplexityWriting, QuestionWithLogic } from "@/components/customUI/BlogInsider/Question";
import Link from "next/link";

const items: ScrollLinks[] = [
    {text:"Sum of digits", href:"sumOfDigits"},
    {text:"Reverse the digits", href:"reverseDigits"},
    {text:"Check if prime", href:"primeCheck"},
    {text:"Check if rectangles overlap", href:"rectangleOverlap"},
    {text:"Calculate factorial", href:"factorial"},
    {text:"Calculate sum of Divisors",href:"sumDivisors"},
    {text:"Calculate square root", href:"sqrt"},
    {text:"Calculate GCD", href:"gcd"},
    {text:"Calculate set bits", href:"bitCount"},
    {text:"nth Fibonacci number", href:"fibonacci"},
    {text: "Important logics", href: "ImportantLogics"},
    {text: "Extra Questions", href:"ExtraQuestions"}
]
export default function Component(){
    return (
        <WithHeadingAndRightSidebar rightSidebarItem={items} heading={"Logic Building - Basics"}>
            Lets start with creating some logics, to ensure we know how to approach the problems.
            <hr className="my-2" />
            
            <b>Note: </b>Solve if you can. Otherwise go through explaination. I recommend explaination even after solving succesfully.

            <QuestionWithLogic id="sumOfDigits"  text="Q1. Given a number, return the sum of the digits of the number" href="https://www.geeksforgeeks.org/problems/sum-of-digits1742/1">
                <ApproachWriting leftText={`Approach #1: `} rightText={`Converting the number to string, and calculating sum while iterating it through.`} />
                <ApproachWriting leftText={`Approach #2: `} rightText={`Reducing the number until 0, by extracting last digit and calculating sum with it. [More Optimised]`} />
                <div className="mt-2" />
                <ComplexityWriting time={`O(logn)`} space={`O(1)`} />
                
                <CppCodingBlock heading="" code={Q1} defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="reverseDigits" text="Q2. Given a positive number, return a number which consists of reverse of the digits" href="https://www.geeksforgeeks.org/problems/reverse-digit0316/1" >
                <ApproachWriting leftText={`Approach #1: `} rightText={`Converting the number to string, reverseing string and converting back to number.`} />
                <ApproachWriting leftText={`Approach #2: `} rightText={`Go through the number, and add it sequentially to get the desired number. [More Optimised]`} />
                <div className="mt-2" />
                <ComplexityWriting time={`O(logn)`} space={`O(1)`} />
                <CppCodingBlock heading="" code={Q2} defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="primeCheck" text="Q3. Given number n, Check if number is prime or not?" href="https://www.geeksforgeeks.org/problems/prime-number2314/1" >
                <ApproachWriting leftText={`Approach: `} rightText={`For all numbers from 2 to n-1, if n is divisible by any of them, it is not prime. Simple For loop. O(n)`} />
                <CppCodingBlock heading="" code={Q3a} defaultHide />
                <div className="mt-2" />
                <ApproachWriting leftText={`Optimisation #1: `} rightText={`Just go from 2 to n/2, as any number after n/2 will not be divisible`} />
                <ApproachWriting leftText={`Optimisation #2: `} rightText={`Check for every number from 2 to sqrt(n), this would be enough to make sure if it is prime or not.`} />
                <div className="mt-2" />
                <ComplexityWriting time="O(sqrt(n))" space="O(1)" />
                <CppCodingBlock heading="" code={Q3b} defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="rectangleOverlap" text="Q4. Given two rectangles, check if they overlap" href="https://www.geeksforgeeks.org/problems/overlapping-rectangles1924/1" >
                {`How a rectange is described?\nWe are usually given 2 points(x,y) which are diagonally opposite.[Usually TopRight & BottomLeft, but confirm in question description]`}
                <div className="mt-2" />
                <ApproachWriting leftText={`Approach: `} rightText={`Two conditions. If one rectangle is left of other, or if one is top of another. In such case, no overlap.`} />
                <div className="mt-2" />
                <ComplexityWriting time="O(1)" space="O(1)" />
                <CppCodingBlock heading="" code={Q4} defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="factorial" text="Q5. Find the factorial of a number" href="https://www.geeksforgeeks.org/problems/factorial5739/1">
                <ApproachWriting leftText={`Approach: `} rightText="Simple for loop ig. Check if mod given, and mod at each for-loop iteration" />
                <div className="mt-2" />
                <ComplexityWriting time={`O(n)`} space="O(1)" /> 
                Skipping Code.
            </QuestionWithLogic>
            <QuestionWithLogic id="sumDivisors" text="Q6. Calculate sum of proper divisors" href="https://www.geeksforgeeks.org/problems/perfect-numbers3207/1">
                The Main question is to find all the divisors in O(n). Once this is done, you can easily sum them and compare.
                
                <div className="mt-2" />
                <ComplexityWriting time="O(sqrt(n))" space="O(1)" />
                <CppCodingBlock heading="" code={Q8} defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="sqrt" text="Q7. Find the square root of the number" href="https://www.geeksforgeeks.org/problems/square-root/1">
                <b>Note: </b>Do not use in-built function.
                <ApproachWriting leftText="Approach #1: " rightText="Iterate from 1 to x until the condition is satisfied x*x <= n. This is O(n)" />
                <ApproachWriting leftText="Approach #2: " rightText="Using Binary Search. Search within 1 to n. Get mid element, check with the condition, and choose any half" />
                <div className="mt-2" />
                <ComplexityWriting time="O(logn)" space="O(1)" />
                <CppCodingBlock heading="" code={Q6} defaultHide />
            </QuestionWithLogic>

            <QuestionWithLogic id="gcd" text="Q8. Find GCD of two numbers" href="https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1" >
                GCD is the highest common factor which is divisible by both. 
                
                <ApproachWriting leftText="Approach #1: " rightText="If we find divisors of minimum number and check divisiblity with other number, gcd can be found like this. T.C. O(n)" />
                <ApproachWriting leftText="Approach #2: " rightText="One template function. Just Remember it without thinking anything." />
                <div className="mt-2" />
                
                <ComplexityWriting time="O(log(min(a,b)))" space="O(1) + stack-calls[can ignore if you want]" />
                <CppCodingBlock heading="" code={Q7} defaultHide />
                <div className="mt-2" />

                <b>Note: </b>There is a built-in function __gcd(int a, int b) in c++. 
                
            </QuestionWithLogic>

            <QuestionWithLogic id="bitCount" text="Q9. Given a number, find number of set bits" href="https://www.geeksforgeeks.org/problems/set-bits0143/1">
                <ApproachWriting leftText="Appraoch #1: " rightText="Calculate the last bit by taking modulus by 2, divide by 2 and continue till number is 0" />
                <div className="mt-2" />
                <ComplexityWriting time="O(logn)" space="O(1)" />
                <div className="mt-2" />
                Skipping Code.
                <div className="mt-2" />
                <b>Note: </b>There is a built-in function __builtin_popcount(int a) in c++. 

            </QuestionWithLogic>

            <QuestionWithLogic id="fibonacci" text="Q10. Find the nth Fibonacci number" href="https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1">
                {`Fibonacci Series: 0,1,1,2,3,5,8,11,...\n`}
                <b>Recurrence Relation: </b>
                <ApproachWriting leftText={`Base Case: `} rightText="F(n) = n, when n = 0 or n = 1" />
                <ApproachWriting leftText={`Recursive Case: `} rightText="F(n) = F(n-1) + F(n-2) for n>1" />
                <div className="mt-2" />
                <ComplexityWriting time="O(n)" space="O(1)" />
                <CppCodingBlock heading="" code={Q10} defaultHide />

            </QuestionWithLogic>
            
            <div id="ImportantLogics">
                <p className="my-4 text-lg font-[500] underline">Some Important logics that can be used in questions</p>
                <CppNote heading={"• Cartesian/Euclidean distance between two points (x1,y1) & (x2,y2)"} code={`double dist = sqrt(pow(x1-x2,2) + pow(y1-y2,2));`} />
                <CppNote heading={"• Manhattan/Hamiltonian distance between two points (x1,y1) & (x2,y2)"} code={`int dist = abs(x1-x2) + abs(y1-y2);`} />
                <CppNote heading={`• Check if number is power of 2`} code={`return n>0 && ((n & (n - 1)) == 0;`} />
                <CppCodingBlock heading={`• Swap two numbers`} code={Logic1} />
                <hr className="my-4" />
            </div>
            <div id="ExtraQuestions">
                <p className="text-lg font-semibold underline">Some Extra basic questions to do</p>
                {extraQuestions.map((x,val) => <div className="text-blue-900 hover:underline py-1" key={`ExtraQuestion-#${val}`}><Link target="_blank" href={x.questionLink}>{val+1}. {x.questionText}</Link></div>)}
            </div>
        </WithHeadingAndRightSidebar>
    );
}

const extraQuestions = [
    {questionText: "Add Digits", questionLink:"https://leetcode.com/problems/add-digits/description"},
    {questionText: "First Unique character", questionLink: "https://leetcode.com/problems/first-unique-character-in-a-string/description/"},
    {questionText: "Armstrong number", questionLink: "https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1"},
    {questionText: "Check if digit is palindrome", questionLink: "https://www.geeksforgeeks.org/problems/palindrome0746/1"}
]

const Logic1 = `    int a=15,b = 10;

    // Method 1: Inbuilt swap function
    swap(a,b);

    // Method 2: using extra variable
    int c = a;
    a = b;
    b = c;

    // Method 3: Without using extra variable
    a = a+b;
    b = a-b;
    a = a-b;

    // Method 4: Without extra variable and +/-
    a = a^b;
    b = a^b;
    a = a^b;
`;

const Q10 = `int nthFibonacci(int n) {
    if(n <= 1)      return n;
    int a = 0, b = 1;
    for(int i = 2;i<=n;i++){
        int c = a+b;
        a = b;
        b = c;
    }
    return b;
}`;

const Q8 = `bool isPerfectNumber(int n) {
    int sum = 1;
    for(int i = 2;i<=sqrt(n);i++){
        if(n%i == 0){
            sum += i;
            if(n/i != i)            sum += n/i;
        }
    }
    return sum == n;
}`;

const Q7 = `int gcd(int a, int b) {
    if(b>a)     return gcd(b,a);
    if(b == 0)      return a;
    return gcd(b,a%b);
}`;

const Q6 = `int floorSqrt(int n) {
    int right = 1;
    while(right*right < n)      right *= 2;
    
    int left = right/2;
    int ans = left;
    while(left<=right){
        int mid = left + (right-left)/2;
        if(mid*mid <= n){
            ans = mid;
            left = mid+1;
        }
        else    right = mid-1;
    }
    return ans;
}`;

const Q4 = `int doOverlap(vector<int> L1, vector<int> R1, vector<int> L2, vector<int> R2) {    
    if(L1[0] > R2[0] || L2[0] > R1[0])      return false;
    if(L1[1] < R2[1] || L2[1] < R1[1])      return false;
    return true;
}`;

const Q3a = `bool isPrime(int n) {
    for(int i = 2;i<n;i++){
        if(n%i == 0)        return false;
    }
    return true;
}`;

const Q3b = `bool isPrime(int n) {
    for(int i = 2;i<=sqrt(n);i++){
        if(n%i == 0)        return false;
    }
    return true;
}`;

const Q2 = `int reverseDigits(int n) {
    int ans = 0;
    while(n != 0){
        ans = ans*10 + n%10;
        n/=10;
    }
    return ans;
}`;
const Q1 = `int sumOfDigits(int n) {
    int ans = 0;
    while(n != 0){
        ans += n%10;
        n/=10;
    }
    return ans;
}`;