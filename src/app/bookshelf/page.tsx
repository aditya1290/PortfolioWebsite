import { createBreadcrumb } from "@/components/customUI/CustomBreadcrumb";
import { WithNavbar } from "@/components/customUI/hook";
import { Pages } from "@/lib/Constants/PagesConstants";
import { ArrowRightSquare } from "lucide-react";
import Image from "next/image";

type BookCategory = {
    [category: string]: Book[];
};


const allBooks:BookCategory  = {
    "Code Quality":[
        {title:`Clean Code`,     author:"Robert C. Martin", href:"https://drive.google.com/thumbnail?id=1RbUK4udfN2HejcAdGZRNxNvjJOKTtlO8"},
    ],
    "Java": [
        {title:`Effective Java`, author:"Joshua Bloch", href:"https://drive.google.com/thumbnail?id=19M8QmqWLbereLjB5H-3hZ5gS10KGhbxX"},
    ]
};

export default function BookShelf(){

    return (
        <WithNavbar currentPage={Pages.Bookshelf} >
            <div className="pt-20 flex justify-center">
                <div className="w-[80vw] ">
                    {createBreadcrumb("Home/bookshelf", "/bookshelf")}
                    <p className="my-4 font-[700] underline text-2xl">BookShelf</p>
                    <div className="my-4 flex flex-wrap gap-12">
                        {Object.keys(allBooks).map(x => DisplayList(x,allBooks[x]))}
                    </div>
                </div>
            </div>
        </WithNavbar>
    );
}

type Book = {
    title: string,
    author: string,
    href: string
}

const DisplayList = (category:string, list: Book[]) => {
    return (
        <div className="mt-2 mb-6" key={`Books-${category}`}>
            <p className="text-md font-[500] flex gap-2 items-center mb-2"><ArrowRightSquare /> {category}</p>
            <div className="flex gap-2 flex-wrap items-center">
                {list.map((x,id) => <BookImage key={`bookSolo-${x.title}-${id}`} title={x.title} author={x.author} href={x.href} />)}
            </div>
        </div>
    );
}

const BookImage = ({title,author,href}: Book) => {
    return (
        <div className="w-30 my-2 flex flex-col justify-center items-center">
            <div style={{position: 'relative', width:"60px", height:"100px"}}>
                <Image src={href} fill alt={title} style={{ objectFit: 'cover' }} />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-md font-[500]">{title}</p>
                <p className="text-sm font-[400] text-gray-600">{author}</p>
            </div>
        </div>
    )
}