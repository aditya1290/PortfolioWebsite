import { Section } from "@/lib/Constants/BlogSections";
import { Button } from "../ui/button";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

export const sectionBox = (s: Section) => {
    const cssClassName = `min-w-md m-2 flex p-2 border-1 justify-between items-center rounded-lg ${s.hoverColor}`;
    return (
        <div className={`${cssClassName}`} key={s.text}>
            <h3 className="m-1 text-md leading-none tracking-tight text-gray-700 font-semibold">{s.text}</h3>
            <Button className='cursor-pointer p-3 mr-3 bg-teal-700' asChild>
                <Link href={s.href}>Go on <CircleArrowRight /></Link>
            </Button>
        </div>
    );
}
