import { AllTags } from "@/lib/allTags"
import { X } from "lucide-react"

type TagsProps = {
    selectedTags: AllTags[],
    alterTag: (x: AllTags)=>void,
    currTag: AllTags
}
type BadgeWithButtonType = {
    currTag: AllTags,
    alterTag: (x:AllTags)=>void,
}
type BadeOnlyDisplayProps = {
    currTag: AllTags
}

export const CreateBadgeWithAddDeleteReset = ({selectedTags, alterTag, currTag}: TagsProps)=>{
    if(selectedTags.some(tag => tag == currTag)){
        return <span onClick={()=>{alterTag(currTag)}} key={currTag} className={`px-1.5 py-0.5 whitespace-nowrap text-xs rounded-sm bg-blue-200 cursor-pointer hover:bg-blue-300`}>{currTag}</span> 
    }
    return <span onClick={()=>{alterTag(currTag)}} key={currTag} className={`px-1.5 py-0.5 whitespace-nowrap text-xs rounded-sm bg-gray-200 cursor-pointer hover:bg-gray-300`}>{currTag}</span>;
}

export const BadgeWithDelete = ({currTag,alterTag}:BadgeWithButtonType) => {
    return (
        <div className="flex whitespace-nowrap px-1.5 bg-gray-200 text-xs hover:bg-gray-300 rounded-sm py-0.5 items-center justify-center" >
            <span key={`selected-${currTag}`}>{currTag}</span>
            <pre> </pre>
            <span className="bg-gray-400 rounded-sm cursor-pointer" onClick={()=>{alterTag(currTag)}}><X size={10} /></span>
        </div>
    );
}

export const BadeOnlyDisplay = ({currTag}: BadeOnlyDisplayProps) => {
    return <span className={`px-1.5 py-0.5 whitespace-nowrap text-xs rounded-sm bg-blue-200 cursor-pointer hover:bg-blue-300`}>{currTag}</span>
}