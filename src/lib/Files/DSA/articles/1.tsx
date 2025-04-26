import { CppNote } from "@/components/customUI/BlogInsider/CodingBlock";
import { ScrollLinks, WithHeadingAndRightSidebar } from "@/components/customUI/BlogInsider/Heading";
import { Table } from "@/components/ui/table";


const items: ScrollLinks[] = [
    {text:"Integer", href:"IntegerValues"},
    {text:"Floating-point", href:"floatingPoint"},
    {text:"Character", href:"charTypes"},
    {text:"Boolean", href:"boolean"},
    {text:"HIGHLIGHT", href:""},
    {text:"Array", href:"Array"},
    {text:"Pointer", href:"Pointer"},
    {text:"HIGHLIGHT", href:""},
    {text: "Struct", href: "struct"},
    {text:"Class",href:"class"}

];

export default function Component(){
    return (

        <WithHeadingAndRightSidebar rightSidebarItem={items} heading={"Introduction to Data types in C++"}>
            Let's explore the various data types in C++, their limits and the usage.
            <hr className="my-2" />


            {`Each variable must have a data type declared at compile time.\nThese data types define the kind of data a variable can hold such as integers, floating-point numbers, characters, or more complex types like structures and classes.`}

            <p className=" my-2 text-lg font-[600] underline">Primitive Data Types</p>

                <p id="IntegerValues" className="text-md font-[500]">a) Integer values</p>
                <ul>
                    <li>• For each data type, it has some bytes. 1 byte have 8 bits, and one byte can have 256(2<sup>8</sup>) values.</li>
                    <li>• For each unsigned data type, it is the range of signed data type.</li>
                </ul>
                <IntegerTypesTable />

                <p id="floatingPoint" className="text-md font-[500] my-2">b) Floating point values</p>
                <FloatingPointTable />

                <p id="charTypes" className="text-md font-[500] my-2">c) Character values</p>
                <p>Character is 1 byte storage, and can store ASCII values</p>
                
                <p id="boolean" className="text-md font-[500] my-2">d) Boolean Types</p>
                <p>Boolean stores the value as either true or false, and this can be stored in 1 bit(1 or 0)</p>

            <div className="my-4" />

            <CppNote heading="Primitive codebase" code={`int a = 193993;\ndouble b = 34.425;\nchar c = 'A';\nbool d = true;`} />
            <div className="my-4" />
            <hr className="my-2" />
            <p className=" my-2 text-lg font-[600] underline">Derived Data Types</p>
            
                <p id="Array" className="text-md font-[500] my-2">a) Array</p>
                A continuous storage of a particular data type, like 5 elements in line together. 
                <CppNote heading="" code={`int marks[5] = {90, 85, 88, 92, 95};`} />

                <p id="Pointer" className="text-md font-[500] my-2">b) Pointer</p>
                Like a pointer(address) to the value, where it is stored.
                <CppNote heading="" code={`int a = 5;\nint* ptr = &a;`} />

            <div className="my-4" />
            <hr className="my-2" />
            <p className=" my-2 text-lg font-[600] underline">User Defined Data type</p>
                <p>C++ allows you to create your own data types as:</p>
                <p id="struct" className="text-md font-[500] my-2">a) Struct</p>
                <CppNote heading="" code={`struct Person{\n    string name;\n    int age;\n}`} />
            
                <p id="class" className="text-md font-[500] my-2">b) Class</p>
                Similar to struct but with access specifiers.
                <CppNote heading="" code={ClassCode} />

              <div className="my-4" />
        </WithHeadingAndRightSidebar>
    );
}

const ClassCode = `class Car {
public:
    string brand;
    void honk() {
        cout << "Beep!" << endl;
    }
};
`;

const FloatingPointTable = () => {
    const types = [
      {
        type: "float",
        size: 4,
        precision: "6-7 decimal digits",
        range: "±1.2 x 10⁻³⁸ to ±3.4 x 10³⁸",
        example: "3.14f, -0.001f",
      },
      {
        type: "double",
        size: 8,
        precision: "15-16 decimal digits",
        range: "±2.3 x 10⁻³⁰⁸ to ±1.7 x 10³⁰⁸",
        example: "3.1415926535, -1e-10",
      },
      {
        type: "long double",
        size: 16,
        precision: "18-21+ decimal digits",
        range: "±3.4 x 10⁻⁴⁹³² to ±1.1 x 10⁴⁹³²",
        example: "3.141592653589793238L",
      },
    ];
  
    return (
      <div className="overflow-x-auto p-4">
        <table className="min-w-full border border-gray-300 rounded-lg shadow">
          <thead className="bg-gray-100 text-left text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Size (Bytes)</th>
              <th className="px-4 py-2 border">Precision</th>
              <th className="px-4 py-2 border">Range</th>
              <th className="px-4 py-2 border">Example</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {types.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.type}</td>
                <td className="px-4 py-2 border">{item.size}</td>
                <td className="px-4 py-2 border">{item.precision}</td>
                <td className="px-4 py-2 border">{item.range}</td>
                <td className="px-4 py-2 border">{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

const IntegerTypesTable = () => {
    const types = [
      {
        type: "short",
        size: 2,
        signed: "-32,768 to 32,767",
        unsigned: "0 to 65,535",
      },
      {
        type: "int",
        size: 4,
        signed: "-2,147,483,648 to 2,147,483,647",
        unsigned: "0 to 4,294,967,295",
      },
      {
        type: "long",
        size: 8,
        signed: "-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807",
        unsigned: "0 to 18,446,744,073,709,551,615",
      },
      {
        type: "long long",
        size: 8,
        signed: "-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807",
        unsigned: "0 to 18,446,744,073,709,551,615",
      },
    ];
  
    return (
      <div className="overflow-x-auto p-4">
        <table className="min-w-full table-auto border border-gray-300 shadow rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Size (Bytes)</th>
              <th className="px-4 py-2 border">Signed Range</th>
              <th className="px-4 py-2 border">Unsigned Range</th>
            </tr>
          </thead>
          <tbody className="bg-white text-sm">
            {types.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">{item.type}</td>
                <td className="px-4 py-2 border text-center">{item.size}</td>
                <td className="px-4 py-2 border">{item.signed}</td>
                <td className="px-4 py-2 border">{item.unsigned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };