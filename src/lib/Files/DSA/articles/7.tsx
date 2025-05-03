import { CppCodingBlock, CppNote } from "@/components/customUI/BlogInsider/CodingBlock";
import { ScrollLinks, WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";
import { ComplexityWriting } from "@/components/customUI/BlogInsider/Question";

const items:ScrollLinks[] = [];

export default function Component(){
    return (
        <WithHeadingAndRightSidebar heading="Sieve of Erastosthenes - Prime numbers" rightSidebarItem={items}>            
            This is specially for getting all prime numbers from 1 to n, in O(n log(log(n))) time and O(n) space complexity
            <hr className="my-2" />

            <p className=" mb-2 text-md font-[500]">Steps:</p>
            <ol className="list-decimal ml-3">
                <li>Idea is to assume all numbers are prime and then, iterate throught them</li>
                <li>for i = 2 to n, when i == 2, we mark multiples of 2 as not prime</li>
                <li>Go through all the numbers till n</li>
            </ol>
            <div className="mb-4" />

            <CppNote heading="pseudo-code" code={AAAA} />
            
            {`\n`}
            <ComplexityWriting time="O(n log(logn))" space="O(n)" />
            {`\n`}
            <CppCodingBlock code={AAAB} defaultHide heading="" />
            
        </WithHeadingAndRightSidebar>
    );
}

const AAAB = `int main() {
    int n = 102;
    vector<bool>isPrime(n,true);
    vector<int>ans;
    
    for(int i = 2;i<n;i++){
        if(isPrime[i] == true){
            ans.push_back(i);
            for(int j = i*i;j<n;j+=i)       isPrime[j] = false;
        }
    }
    for(auto it: ans)       cout<<it<<" ";
}`;

const AAAA = `for(int i = 2;i<n;i++){
    if(isPrime[i] == true)      // this is tru
    for(int j = i*i;j<n;j+=i)       isPrime[j] = false;
}
// returns list of positives
`;