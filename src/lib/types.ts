import { ReactNode } from "react";
import { DsaTag } from "./allTags";

export type SidebarProps = {
    current: string;
};

export type RecentLink = {
    text: string,
    href: string
}

export type MainPageButtonProps = {
    href: string
    Icon: ReactNode,
    text: string,
    key: string
}

export type SelectSubFilterProps = {
    filter: string
}

export type DsaBlogSettingsProp = {
    filter: string,
    subFilter: string,
    selectedTags: DsaTag[],
    filterString: string
}

export type DataProps = {
    id: string,
    title: string,
    date?: number,
    tags: DsaTag[]
    level: "Beginner" | "Intermediate" | "Advanced",
    href?: string,
    last?:boolean
}

