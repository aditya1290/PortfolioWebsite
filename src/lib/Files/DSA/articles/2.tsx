import { CppCodingBlock, CppNote } from '@/components/customUI/BlogInsider/CodingBlock';
import { AccordingSubHeading, ScrollLinks, WithHeadingAndRightSidebar } from '@/components/customUI/BlogInsider/Heading';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Head from 'next/head';

const items:ScrollLinks[] = [
    { text: "Vector", href:"vector", type: "CLICK_OPEN"},
    { text: "String",href:"string", type: "CLICK_OPEN"},
    { text: "Stack & Queue", href:"stackqueue", type: "CLICK_OPEN"},
    { text: "Priority Queue", href:"priorityqueue", type: "CLICK_OPEN"},
    { text: "Deque", href: "deque" , type: "CLICK_OPEN"},
    { text: "Unordered Set", href: "unorderedset" , type: "CLICK_OPEN"},
    { text: "Set", href: "set" , type: "CLICK_OPEN"},
    { text: "Multiset", href: "multiset" , type: "CLICK_OPEN"},
    { text: "Unordered Map", href: "unorderedmap" , type: "CLICK_OPEN"},
    { text: "Map", href:"map", type: "CLICK_OPEN"},
    { text: "Pair", href: "pair" , type: "CLICK_OPEN"},
    { text: "Some Common Functions", href: "functions", type: "CLICK_OPEN"}
]

export default function Component(){
    return (
        <WithHeadingAndRightSidebar heading={"Introduction to STL and important Data Structures"} rightSidebarItem={items}>
            <Head>
                <title>Introduction to STL and important Data Structures</title>
                <meta property="og:title" content="Introduction to STL and important Data Structures" key="title" />
            </Head>
            <p>STL is a library that contains multiple data structures and algorithm to effectively store and manipulate data. For eg. map, set</p>
            <ul className='my-2'>
                <li><span><b>Sequence Containers</b>: vector, deque, string</span></li>
                <li><span><b>Associative Containers (Ordered)</b>: set, multiset, map</span></li>
                <li><span><b>Unordered Associative Containers (Hash-based)</b>: unordered_map, unordered_set</span></li>
                <li><span><b>Container Adaptors</b>: stack, queue, priority_queue</span></li>
                <li><span><b>Utility Components</b>: pair</span></li>
                <li><span><b>Others(not so important)</b>: list, forward_list, multimap, bitset, array, tuple</span></li>
            </ul>
            <Image src="/stl.png"  alt="All STL components"  width={400}  height={300} fill={false} />

            {/* Vector */}
            <br />
            <Accordion type="multiple">
                <AccordionItem value="Vector" className='my-1'>
                    <AccordionTrigger id="vector" className='cursor-pointer bg-blue-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text='Vector' /></AccordionTrigger>
                    <AccordionContent  className='my-2 border-2 p-2 w-[100%]'>
                        A vector is resizable array. It can grow and shrink as per the requirement. 
                        On the other hand, Size of an array can not be modified.
                        <br />
                        <CppCodingBlock heading={"Ways to define a vector"} code={vectorDefine} />
                        <br />
                        <CppCodingBlock heading={"Ways to Traverse a vector"} code={vectorTraversal} />
                        <br />
                        <CppCodingBlock heading={"Most common functions in vector"} code={vectorFunctions} />
                        <br />
                        <CppNote code={`v.empty() == true`} heading={"Check if vector is empty"} />
                        <CppNote code={vectorResize} heading={"Resize vector"} />
                        <CppNote code={`reverse(v.begin(),v.end());`}   heading='Reverse Vector' />
                        <CppNote code={`sort(v.begin(),v.end());`} heading={"Sort Vector(Ascending)"} />
                        <CppNote code={`sort(v.begin(),v.end(),[](int a, int b){\n    return a>b;\n});`}    heading={"sort Vector(Descending)"} />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="String" className='my-1'>
                    <AccordionTrigger id="string" className='cursor-pointer bg-green-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text='String' /></AccordionTrigger>
                    <AccordionContent  className='my-2 border-2 p-2'>
                    A string is a sequence of characters. String, unlike char array, is resizeable. 
                    <CppCodingBlock heading={`Ways to define a String`} code={stringDefine} />
                    <br />
                    <CppNote code={`s.substr(start,length);`} heading='Calculating substring' />
                    All insert, modify and erase functions are similar as vector.
                    All Reverse, sorting functions are similar too. 
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="StackQueue" className='my-1'>
                    <AccordionTrigger id="stackqueue" className='cursor-pointer bg-orange-100 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text='Stack & Queue' /></AccordionTrigger>
                    <AccordionContent  className='my-2 border-2 p-2'>
                    A stack is a linear data structure that follows the LIFO principle — the element inserted last is the one to be removed first. Think of it like a pile of plates: you put plates on top and remove from the top.
                    <CppCodingBlock code={commonStack} heading={"Common functions of stack"} />
                    <div><b>Use Cases:</b> Postfix-Infix conversions(Expression evaulation), Undo mechanism, call stack, DFS Traversal in graph</div>
                    <br />
                    A queue is a linear structure that follows the FIFO principle — the first element inserted is the first one to be removed. Think of it like a queue at a ticket counter.
                    <CppCodingBlock code={commonQueue} heading={"Common functions of queue"} />
                    <div><b>Use Cases:</b> Task-scheduling, Level-Order Traversal</div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="PriorityQueue" className='my-1'>
                    <AccordionTrigger id="priorityqueue"  className='cursor-pointer bg-teal-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text="Priority Queue" /></AccordionTrigger>
                    <AccordionContent className='my-2 border-2 p-2 rounded-lg' >
                    A priority queue is a special type of queue where each element is associated with a priority, and the element with the highest priority is served first.
                    <br />

                    <p style={{ whiteSpace: "break-spaces" }}>
                    {`The Priority Queue is similar to queue or is exactly how heaps work.\nIt only calculates the top elements, and all the other elements are not in sorted form.\nIn Heaps, as you pop the top element, you have to call heapify function to make sure you get the top element as the correct one.\nIn PQ, this is taken care of internally.`}
                    </p>

                    <br />
                    In STL:
                    <ul>
                        <li>By default, it behaves as a Max Heap (largest element on top)</li>
                        <li>You can customize it to act as a Min Heap or even apply custom comparators</li>
                    </ul>
                    <br />
                    <CppCodingBlock code={commonPQ} heading={"Common functions of Priority Queue"} />
                    <p className='mb-1'>{`Since Priority Queue internally is a Heap(Tree), all push and pop are O(nlogn).\nThe top(), empty(), size() are O(1)`}</p>
                    <div><b>Use Cases:</b> Dijkstra&apos;s Algorithm(Graphs), Load Balancing System, A* algorithm, etc.</div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="Deque" className='my-1'>
                    <AccordionTrigger  id="deque" className='cursor-pointer bg-fuchsia-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text="Deque" /></AccordionTrigger>
                    <AccordionContent className='my-2 border-2 p-2 rounded-lg'>
                        <p>This is a data structure that supports fast insertion and deletion from both ends — front and back.</p>
                        A deque is a dynamic array-like container that allows:
                        <ul>
                            <li className='pl-4'>1. O(1) insertion/deletion from both front and back.</li>
                            <li className='pl-4'>2. Random access like vectors (deque[i]).</li>
                            <li className='pl-4'>3. Automatic resizing.</li>
                            <li className='pl-4'>4. Same Importance to both the ends, and O(1) operations</li>
                        </ul>
                        <br />
                        <CppNote code={`deque<int> dq;`} heading={`The way it is defined`} />
                        <CppCodingBlock code={dequeOperations} heading={`Common functions in deque`} />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="unordered_set" className='my-1'>
                    <AccordionTrigger  id="unorderedset" className='cursor-pointer bg-rose-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text="Unordered set" /></AccordionTrigger>
                    <AccordionContent className='my-2 border-2 p-2 rounded-lg'>
                        <p>When you need to store a collection of unique elements and want average O(1) time complexity for insertions, deletions, and searches.</p>
                        <p>This stores unique elements in no particular order, and uses a hash table under the hood.</p>
                        <p>Unordered_set is unordered, and it stores the unique value.</p>
                        <p>the elements in unordered_set are not sorted, and offer O(1) time complexity</p>
                        <CppNote heading={"Define unordered_set"} code={`unordered_set<int>s;`} />
                        <CppCodingBlock heading={"Common functions in unordered_set"} code={CommonUnorderedSet} />
                        <br/>
                        <p><b>Important: </b>Since unordered is based on hash tables, the keys should be hashable. For eg: int is hashable internally, but for custom classes, we need to define hashTo separately. </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="set" className='my-1'>
                    <AccordionTrigger  id="set" className='cursor-pointer bg-emerald-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text="Set" /></AccordionTrigger>
                    <AccordionContent className='my-2 border-2 p-2 rounded-lg'>
                        <p>A set in C++ STL is a powerful container when you need to store unique elements in a sorted order and require logarithmic time operations.</p>
                        <p>Internally, it builds self-balancing trees. Like (RB Trees, or AVL Tree)</p>
                        <p>With every insert or delete or search, it can go upto O(logn) time complexity for the operation</p>
                        <CppNote heading={"Define set"} code={`set<int>s;`} />
                        <CppCodingBlock heading={"Common functions in set"} code={CommonSet} />
                        <br />
                        <p>The only issue with set is, it can&apos;t store multiple values within set</p>
                        <br />
                        <p><b>Important: </b>Since Set needs to be ordered, the values getting stored in set should be comparable. We can use int, but not any random struct(unless we provide custom comparator. This is not needed currently)</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="multiset" className='my-1'>
                    <AccordionTrigger id="multiset" className='cursor-pointer bg-amber-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text='Multiset' /></AccordionTrigger>
                    <AccordionContent className='my-2 border-2 p-2 rounded-lg'>
                        <p>It is as similar to set, but since set can&apos;t store multiple values</p>
                        <p>Multiset helps you put multiple equal values inside set</p>
                        <CppNote heading={"Check with this code"} code={`multiset<int>s;\ns.insert(5);\ns.insert(5);\ncout<<s.size();   // returns 2`} />
                        All the functions are similar to set, 
                        The only function that changes is in erase function.
                        <p>On performing erase(x) function, it erases all the occurences of the element x from the set. </p>
                        <p>To delete only one particular occurence, you need to search only one and pass the iterator to erase() function</p>
                        <CppNote heading={"Deleting one from multiple occurences of x"} code={`s.erase(s.find(x));        // It finds x, which returns iterator and we use it to delete only one ioccurence`}  /> 
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="unordered_map" className='my-1'>
                    <AccordionTrigger  id="unorderedmap" className='cursor-pointer bg-violet-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text="Unordered map" /></AccordionTrigger>
                    <AccordionContent className='my-2 p-2 border-2 rounded-lg'>
                        <p>unordered_map provides key-value mapping with average O(1) time complexity for search, insert, and delete, using hash tables internally.</p>
                        <p>Unordered_map stores key-value pairs, offers costant time O(1) for search, delete and find operation</p>
                        <p>Keys in unordered_map are unique, and the order is not maintained</p>
                        <p>One of the common use cases is to count frequency of the elements in an array</p>
                        <CppNote heading={"Define unordered_map"} code={`unordered_map<int,int>m;`} />
                        <br />
                        <CppCodingBlock heading={"Common functions of unordered_map"} code={commonUnorderedMap} />
                        <br />
                        <CppNote heading={"One of the most common issue with people is, they use m[key] to check if the key is avaiable in the map"}
                            code={`unordered_map<int,int>m;\nif(m[5] == 1){}\ncout<<m.size();       // This will return 1, as when executed m[5], it created the key 5 inside the map`} />
                        <p><b>Important: </b>We cannot use custom objects unless we define custom hash function</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="Map" className='my-1'>
                    <AccordionTrigger id="map" className='cursor-pointer bg-lime-50 px-4 py-0 rounded-lg items-center'><AccordingSubHeading text="Map" /></AccordionTrigger>
                    <AccordionContent className='my-2 p-2 border-2 rounded-lg'>
                        <p>Map uses a self-balancing Binary Search Tree (usually Red-Black Tree) internally</p>
                        <p>Map works in O(log n) time complexity for insertions, deletions, and searching.</p>
                        <p>It stores in (key,value) pairs, Keys are unique and are kept in sorted order.</p>
                        <br />
                        <CppNote heading={"Define Map"} code={`map<int,int>m;`} />
                        <br/>
                        <p>All the functions are similar to unorderer_map only.</p>
                        <p><b>Important: </b>{`\n1. Avoid using m[x] to check presence as it can create the key x, while searching itself\n2. You can also use custom comparators to change key sort order.`}</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="Pair" className='my-1'>
                    <AccordionTrigger  id="pair" className='cursor-pointer bg-indigo-50 px-4 rounded-lg items-center py-0'><AccordingSubHeading text="Pair"></AccordingSubHeading></AccordionTrigger>
                    <AccordionContent className='my-2 border-2 rounded-lg p-2'>
                        {`Sometimes, you may require to store two values together, and use them as a single component.\nYou can create a struct but that can be a little overwhelming. Hence the pair\nPair is a template class that holds two values first ans second. Think like a two element array.`}                        
                        <CppCodingBlock heading="Ways to use it" code={PairCode}/>
                        <CppNote heading='For more items, you can club the parameters as well' code={`pair<int,pair<int,string>>p;`} />
                        <br /><p>These are in-build comparator which on comparing, put the priority to .first element, and if equal, then .second element</p>
                        <p><b>Use cases: </b>Returning 2 values from a function, custom sorting of containers, Multiple trees and graph algorithms</p>
                        <br />
                        <p style={{ whiteSpace: "break-spaces" }}><b>{`PS: This is super light-weight, better optimised for easy stuff.\nAlways check for possibilities of changing your 2 valued vector<> to pair.`}</b></p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="some functions" className='my-1'>
                    <AccordionTrigger id="functions" className='cursor-pointer bg-stone-200 px-4 rounded-lg items-center py-0'><AccordingSubHeading text="Some functions" /></AccordionTrigger>
                    <AccordionContent  className='my-2 border-2 rounded-lg p-2'>
                        <CppNote heading='Minimum element in a vector' code={`int minValue = *min_element(v.begin(),b.end());`} />
                        <CppNote heading='Maximum element in a vector' code={`int maxValue = *max_element(v.begin(),b.end());`} />
                        <CppNote heading="Sum of the elements in a vector" code={`int sum = accumulate(v.begin(),v.end(),0);`} />
                        <CppNote heading="sort a vector" code={`sort(v.begin(),v.end());`} />
                        <CppNote heading="Get the Next permutation of the vector" code={`next_permutation(v.begin(),v.end());`} />
                        
                    </AccordionContent>
                </AccordionItem>

            </Accordion>

        <div className='h-40'></div>


        </WithHeadingAndRightSidebar>
    );
}



const PairCode = 
`    pair<int,string>p;
    p = make_pair(1,"Adi");                     // one way
    p.first = 5;                                // can initialise like this
    cout<<p.first<<" "<<p.second<<endl;         // can access like this 
`;

const commonUnorderedMap = 
`    unordered_map<int,int>m;
    m[key] = value;                     // Inserts or update function. [key and value are integers]
    if(m.find(key) != m.end()){}        // It checks whether key is in map or not
    if(m.count(key))                    // Returns 1 if key is in map. 
    m.erase(key);                       // Deletes key
    m.size();                           // size fo the map
    m.clear();                          // Clears the map

    // Traversing. Here it.first = key, it.second = value
    for(auto it: m){
        cout<<it.first<<" "<<it.second;
    }
    `;

const CommonSet = 
`    set<int>s;
    s.insert(val);                      // insert
    s.erase(val);                       // delete val from the set

    // search in set, and check if it is not equal to end() iterator
    if(s.find(val); != s.end()){}       

    // search using count method, which returns 1 when value available in set
    if(s.count(val)){}                  
    s.size();                           // size
    s.empty();                          // True if set is empty
    s.clear();                          // clear set values

    // Return iterator where the element returned >= val. If not found, it returns s.end();
    s.lower_bound(val);

    // Return iterator where the element returned >  val. If not found, it returns s.end();
    s.upper_bound(val);`;

const CommonUnorderedSet = 
`    unordered_set<int>s;
    s.insert(val);                      // insert
    s.erase(val);                       // erase

    // Search using Find method and check if it is not equal to end() iterator
    if(s.find(val) != s.end()){}        
    
    // Search using count method, returning count with matching val(0 or 1)
    if(s.count(val)){}                  
    s.size();                           // size
    s.clear();                          // Clearing the unordered_set
    s.empty();                          // boolean value if s is empty
    
    // iterating on unordered_set
    for(int x: s){
        cout<<x<<" ";
    }`

const dequeOperations = 
`    deque<int>q;
    q.push_front(x);        // push at front
    q.push_back(x);         // push at back
    q.pop_front();          // pop at front
    q.pop_back();           // pop at back
    q.front();              // front element
    q.back();               // back element
    q.size();               // size of the deque
    q.empty();              // true if deque is empty
    q.clear();              // clear all elements in deque O(n)
`;

const commonPQ = 
`    priority_queue<int>pq;     // By default max heap, i.e. Maximum number is the front.
    priority_queue<int,vector<int>,greater<int>>pq;     // Min Heap i.e. Minimum number is in front
    // Printing all the numbers
    while(!pq.empty()){             
        cout<<pq.top()<<" ";
        pq.pop();
    }`;



const commonQueue = 
`    queue<int>q;
    q.push(x);            // Pushing at the back
    q.pop();              // Popping at the front, if empty, will give Runtime Error
    q.front();            // Get the front element, without popping
    q.back();             // Get the back element  
    q.size();             // Get the size of the stack
    q.empty();            // True if stack is empty
    // All operations are O(1)
`;

const commonStack= 
`    stack<int>stk;
    stk.push(x);            // Pushing at the top
    stk.pop();              // Popping at the top, if empty, will give Runtime Error
    stk.top();              // Get the top element, without popping
    stk.size();             // Get the size of the stack
    stk.empty();            // True if stack is empty
    // All operations are O(1)
`;

const stringDefine = 
`    string s;           // Empty string
    string s = "hello";
    string s(5,'x');        // s = "xxxxx";
    s.push_back(c);     // Adds char c to the end of the string
    s.pop_back();       // Removes last char of the string`;

const vectorTraversal = 
`    int x = v.size();                  // size O(1)

    // Iterate easily like this
    for(auto it: v)                             cout<<it<<" ";  
    
    // Iterators
    for(auto it=v.begin();it!=v.end();it++)     cout<<*it<<" "; 
    
    // Iterate using size
    for(int i = 0;i<v.size();i++)               cout<<v[i]<<" ";

    //Reverse Iterators => Array traverse in reverse
    for(auto it=v.rbegin();it != v.begin();it++)

`;

const vectorDefine = 
`    vector<int>v;                   // empty vector
    vector<int>v(size);             // with size
    vector<int>v(size,value);       // with size and all values = value
    vector<int>v = {1,2,3,4,5};     
    vector<int>v2(v1);              // copy constructor
`;

const vectorFunctions =  
`    v.push_back(x);         // Pushing back O(1)
    v.pop_back();           // Pop back O(1)

    // Find from begin to end and get iterator
    // More like sequential search --> O(n)
    auto it = find(v.begin(),v.end(),value);

    // find and erase
    // Erase shift all elements towards left after removing index ==> O(n)
    v.erase(find(v.begin(),v.end(),value));
    v.front();      // Value at index 0
    v.back();       // Value at last index
    v.insert(iterator,value);   // insert value at some particular iterator(index)
`;

const vectorResize = 
`// v.resize(size,value(optional));
v.resize(6);
v.resize(6,5);`

