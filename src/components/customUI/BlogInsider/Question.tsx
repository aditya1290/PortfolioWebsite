import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode, useState } from "react";

type QuestionWithLogicProps = {
    text: string,
    href: string,
    children?:ReactNode,
    id: string,
    show?:boolean
}
export const QuestionWithLogic = ({text,href, children, id, show=true}: QuestionWithLogicProps) => {
    const [hidden,setHidden] = useState<boolean>(show);
    return (
        <div className="my-4" id={id}>
            <div className="flex gap-1 font-[600]">
                <p className="mb-1">{text}</p>
                <Link className="text-blue-500 hover:underline hover:text-blue-700" target="_blank" href={href}>[Try here]</Link>
            </div>
            {hidden ? <Button className="cursor-pointer text-green-500" variant={"ghost"} onClick={()=>{setHidden(false)}} >Show Explaination</Button> : <div className="ml-6">{children}</div>}
            <hr className="mt-2" />
        </div>
    );
}

type ApproachWritingProps = {leftText:string,rightText:string};
export const ApproachWriting = ({leftText,rightText}:ApproachWritingProps) => {
    return (
        <div className="flex gap-2">
            <div className="font-[600] text-[#4e249f]">{leftText}</div>
            <div>{rightText}</div>
        </div>
    )
}

type ComplexityWritingProps = {time:string,space:string};
export const ComplexityWriting = ({time,space}:ComplexityWritingProps) => {
    return (
        <p className="my-2 font-serif">{`Time Complexity: ${time}\nSpace Complexity ${space}`}</p>
    )
}