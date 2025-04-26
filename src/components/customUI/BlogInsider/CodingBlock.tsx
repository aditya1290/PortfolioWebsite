import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight, tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodingBlockProps = {
    heading: string,
    code: string, 
    defaultHide?: boolean,
    buttonText?: string
}
export const CppCodingBlock = ({code, heading, defaultHide=false, buttonText="Show code"}: CodingBlockProps) => {
    const [hideValue,setHideValue] = useState<boolean>(defaultHide);
    return (
        <div className="font-serif w-[100%] mb-1">
            {heading.length > 0 &&  <p className='text-black text-medium'>{heading}</p>}
            {hideValue == true ? <Button style={{padding:"5px 10px", background:"#2d60e0", color:"white", borderRadius:"5px"}} onClick={()=>{setHideValue(false)}}>{buttonText}</Button> : (
            <SyntaxHighlighter language={"cpp"} style={tomorrowNight} showLineNumbers wrapLongLines>
                {code}
            </SyntaxHighlighter>)}
        </div>
    )
}



type NormalNoteProps = {text:string}

export const NormalNote = ({text}:NormalNoteProps) => <SyntaxHighlighter language='text' style={atomOneLight}>{text}</SyntaxHighlighter>


export const MarkupCodingBlock = ({code}: CodingBlockProps) => {
    return (
        <SyntaxHighlighter language='markup' style={atomOneLight}>{code}</SyntaxHighlighter>
    );
}

export const CppNote = ({code,heading}: CodingBlockProps) => {
    return (
        <div className='font-serif w-[100%] mb-2'>
            {heading.length > 0 && <p>{heading}</p>}
            <SyntaxHighlighter language='cpp' style={atomOneLight}>{code}</SyntaxHighlighter>
        </div>
    )
}