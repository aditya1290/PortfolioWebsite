import { Articles } from "@/lib/Data/DSA/Articles";
import { RecentLink } from "@/lib/types";
import Link from "next/link";

export default function Sidebar(){
    return (
      <div className="fixed h-screen text-sm w-72 bg-gray-100 text-black flex flex-col p-4 space-y-4 border-r font-sans ">
        <div className="px-2">
            <span className="text-gray-500 dark:text-gray-400">#</span>
            <span className="font-semibold pl-2">Recent Articles</span>
        </div>
        {allRecentLinksFetch().map(x => recentLinksBlock(x))}
      </div>
    );
}

const allRecentLinksFetch = () => {
    const allArticles = [];
    allArticles.push(...(Articles.map(x => {return {text:x.title, href:`/blogs/DSA/articles/${x.id}`, date:x.date??10}})));
    allArticles.sort((a,b)=> b.date - a.date);
    return allArticles.slice(0,20);
}

const recentLinksBlock = (x: RecentLink) => {
    return (
        <div className="px-2 my-1 font-serif text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis hover:text-gray-900 hover:underline" key={x.text}>
            <Link href={x.href}>{x.text}</Link>
        </div>
    );
}