import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import React from "react";

type BreadcrumbItemProps = {
    text: string,
    href: string
}

export const createBreadcrumb = (text: string, href: string) => {

    const splittedText = text.split("/");
    const allLinks = href.split("/");

    const list: BreadcrumbItemProps[] = [];

    let continuedLink = "";
    for(let i = 0;i<splittedText.length;i++){
        continuedLink += allLinks[i] + '/';
        list.push({href: continuedLink, text: splittedText[i]})
    }
    return <CustomBreadcrumb list={list} />;
}

function CustomBreadcrumb({ list }: { list: BreadcrumbItemProps[] }){
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {list.map((x,index) => {return (
                    <React.Fragment key={`Breadcrumb-${index}`}>
                        <BreadcrumbItem >
                            <BreadcrumbLink href={x.href}>{x.text}</BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < list.length-1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                );})}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
