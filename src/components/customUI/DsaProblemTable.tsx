import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataProps, DsaBlogSettingsProp } from "@/lib/types";
import { LeetcodeProblems } from "@/lib/Data/DSA/Problems/Leetcode";
import { GeekForGeeksProblems } from "@/lib/Data/DSA/Problems/GeekForGeeks";
import { GFG, INTERVIEWBIT, LEETCODE } from "@/lib/Constants/constants";
import { ArticleItem } from "./ArticleItem";

export const DsaProblemTable = ({subFilter,selectedTags,filterString}: DsaBlogSettingsProp) => {
    let currentList:DataProps[] = [];
    if(subFilter == LEETCODE)         currentList = LeetcodeProblems;
    if(subFilter == GFG)              currentList = GeekForGeeksProblems;
    if(subFilter == INTERVIEWBIT)     currentList = [];

    if(selectedTags.length>0)       currentList = currentList.filter(item => selectedTags.every(x => item.tags.includes(x)));
    if(filterString.length>0)       currentList = currentList.filter(item => (item.title.toLowerCase().includes(filterString.toLowerCase()) || item.id.includes(filterString)));
    return (<Table>
        <TableHeader>
            <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="w-[20vw]">Tags</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                currentList.map(x => {return (
                    <ArticleItem key={`CompleteItem-${x.id}`} href={`./blogs/DSA/problems/${subFilter}/${x.id}`} id={`${x.id}`} level={x.level} title={x.title} tags={x.tags} date={x.date} />
                )})
            }
        </TableBody>
    </Table>);
}



