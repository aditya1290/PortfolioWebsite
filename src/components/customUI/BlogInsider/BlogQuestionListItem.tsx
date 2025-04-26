import { SquareAsteriskIcon } from "lucide-react";
import Link from "next/link";

type BlogQuestionListItemProps = {
    id: number,
    notes?: string,
    href?: string,
    text?: string
}
export default function BlogQuestionListItem({id,notes="",href="",text=""}:BlogQuestionListItemProps){
    return (<div key={`item-${id}`} >
        <div className="flex items-center w-[80%] my-2">
            <div className="flex gap-4 items-center w-100"><SquareAsteriskIcon size={15} /> <Link target="_blank" className="text-blue-900 hover:underline" href={href}>{text}</Link></div>
            <p className="text-sm">{notes}</p>
        </div>
        <hr />
    </div>);
}