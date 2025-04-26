'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react";
import DownloadResume from "./DownloadResume";
import { navBarOptions } from "@/lib/Constants/constants";
import { toTitleCase } from "@/lib/utils";
import { SidebarProps } from "@/lib/types";


export default function NavigationBar({current}: SidebarProps){
    return (
        <div className="bg-[#B1B6A6] fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center px-6 py-3">
                <Link href="/"><div className="pl-6 w-auto font-[Open_Sans] text-lg" >Aditya Garg</div></Link>
                <div className="flex justify-between align-items font-serif font-sans">
                    {navBarOptions.map(x => navigationCenterLinks(x,current))}
                </div>
                <Button size="sm" color="black" className="cursor-pointer" onClick={DownloadResume} asChild>
                    <Link href={"https://shorturl.at/GBq7V"} target='_blank'>Resume <ExternalLink /></Link>
                </Button>
            </div>
        </div>
    );
}

const navigationCenterLinks = (x: string, current: string) => {
    return <Link key={x} style={current.toLowerCase() == x.toLowerCase() ? {textDecoration: "underline"} : {}} className="px-4 py-1 hover:underline hover:bg-gray-200 rounded-md" href={`/${x}`} >{toTitleCase(x)}</Link>;
}