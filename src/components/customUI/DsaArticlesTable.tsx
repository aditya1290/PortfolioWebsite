import { Articles } from "@/lib/Data/DSA/Articles";
import { DataProps, DsaBlogSettingsProp } from "@/lib/types";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "../ui/table";
import { ArticleItem } from "./ArticleItem";
import { Pagination, PaginationContent, PaginationItem } from "../ui/pagination";
import { Button } from "../ui/button";
import { useState } from "react";

export const DsaArticlesTable = ({selectedTags,filterString}: DsaBlogSettingsProp) => {
    let currentList:DataProps[] = Articles;

    if(selectedTags.length>0)       currentList = currentList.filter(item => selectedTags.every(x => item.tags.includes(x)));
    if(filterString.length>0)       currentList = currentList.filter(item => (item.title.toLowerCase().includes(filterString.toLowerCase()) || item.id.includes(filterString)));

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <Table>
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
                        currentList.slice(currentPage*10-10,Math.min(currentPage*10,currentList.length)).map((x,id) => {
                            return (
                                <ArticleItem last={x.last} key={`CompleteItem-${x.id}-${id}`} href={`/blogs/DSA/articles/${x.id}`} id={`${x.id}`} level={x.level} title={x.title} tags={x.tags} date={x.date} />
                            )
                        })
                    }
                </TableBody>
            </Table>
            <div className="my-2" />

            <Pagination>
                <PaginationContent>
                {Array.from({ length: Math.ceil(currentList.length/10) }, (_, i) => (
                    <PaginationItem key={`paginated-button-${i}`}><Button className="cursor-pointer mx-1" variant={i+1 == currentPage ? "default" : "outline"} onClick={()=>{setCurrentPage(i+1)}}>{i+1}</Button></PaginationItem>
                ))}
                </PaginationContent>
            </Pagination>
        </div>

    );
}