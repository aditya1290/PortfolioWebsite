'use client';
import { BadgeWithDelete, CreateBadgeWithAddDeleteReset } from "@/components/customUI/Badges";
import { Intro } from "@/components/customUI/BlogSpace";
import { createBreadcrumb } from "@/components/customUI/CustomBreadcrumb";
import { DsaArticlesTable } from "@/components/customUI/DsaArticlesTable";
import { DsaProblemTable } from "@/components/customUI/DsaProblemTable";
import { WithNavbarAndSidebar } from "@/components/customUI/hook";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { AllTags, DsaTag, DSATopicTags } from "@/lib/allTags";
import { DSAFilter } from "@/lib/Constants/constants";
import { Pages } from "@/lib/Constants/PagesConstants";
import { DsaBlogSettingsProp } from "@/lib/types";
import { toTitleCase } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { RotateCcw, Shuffle } from "lucide-react";
import { useState } from "react";

export default function DSA(){
    const [settings,setSettings] = useState<DsaBlogSettingsProp>({filter:"Articles",subFilter:"Others",selectedTags:[],filterString:""});

    const alterTag = (tag: DsaTag) => {
        setSettings(prev => {
          const alreadySelected = prev.selectedTags.includes(tag);
          const updatedTags = alreadySelected
            ? prev.selectedTags.filter(t => t !== tag) 
            : [...prev.selectedTags, tag]; 
      
          return {
            ...prev,
            selectedTags: updatedTags
          };
        });
      };

    const resetTags = ()=>{
        setSettings(prev => {return {...prev,selectedTags:[]}});
    }
    const setFilterText = (text:string) => {
        setSettings(prev => {return {...prev,filterString:text}});
    }
    
    return (
        <WithNavbarAndSidebar currentPage={Pages.Blogs}>
            {createBreadcrumb("Home/Blogs/DSA", "/blogs/DSA")}
            <Intro text="DSA Space" description="You can find articles and problems with their solution in the best way possible" />
            
            <div className="flex justify-between items-end mb-2">
                <div className="flex gap-2">
                    <SelectFilter filter={settings.filter} onChange={(value)=>{setSettings(prev => {return {...prev,filter:value, subFilter:""}})}} />
                    <SelectSubFilter filter={settings.filter} subFilter={settings.subFilter} onChange={(value)=>{setSettings(prev => {return {...prev,subFilter:value}})}} disabled={!settings.filter || settings.filter.length === 0} />              
                </div>
                <div className="flex gap-2 items-end">
                    {settings.filter == "Problems" && <Button variant="default" ><Shuffle /></Button>}
                    <SearchInput setFilterString={setFilterText} filterText={settings.filterString}  />
                </div>
            </div>
            <div className="flex gap-1 flex-wrap items-center">
                <TaggingMechanism selectedTags={settings.selectedTags} alterTag={alterTag} resetTag={resetTags}  />
                {settings.selectedTags.map((x:DsaTag) => <BadgeWithDelete key={`buttonBadge-${x}`} currTag={x} alterTag={alterTag} />)}
            </div>
            <hr className="mt-1" />
            {settings.filter == "Problems" && <DsaProblemTable filter={settings.filter} subFilter={settings.subFilter} selectedTags={settings.selectedTags} filterString={settings.filterString} />}
            {settings.filter == "Articles" && <DsaArticlesTable filter={settings.filter} subFilter={settings.subFilter} selectedTags={settings.selectedTags} filterString={settings.filterString} />}
        </WithNavbarAndSidebar>
    );
}

const SelectFilter = ({filter, onChange}: SelectFilterOnChangeProps) => {
    return (
        <Select onValueChange={(value) => {onChange(value)}} value={filter}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select type"  />
            </SelectTrigger>
            <SelectContent>
                {Object.keys(DSAFilter).map((x,index) => <SelectItem key={`filter-${index}`} value={x}>{x}</SelectItem> )}
            </SelectContent>
        </Select>
    );
}

type TaggingMechanismProps = {
    selectedTags: AllTags[],
    alterTag: (x: string)=>void,
    resetTag:()=>void
}
const TaggingMechanism = ({selectedTags, alterTag,resetTag}: TaggingMechanismProps) => {
    const tagContentString = "Tags"+(selectedTags.length>0 ? ` (${selectedTags.length})` : "");
    const [filterString,setFilterString] = useState<string>("");

    return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="cursor-pointer">{tagContentString}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="mt-1 w-100 border border-[#e4e4e7] rounded z-10 shadow-lg font-sans p-1 bg-white">
                    <DropdownMenuItem key={"search"} onSelect={(e)=>{e.preventDefault();}}>
                        <Input onKeyDown={(e)=>{e.stopPropagation();}} placeholder="Search tags" onChange={(e)=>{setFilterString(e.target.value);}} value={filterString} />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator style={{height:"1px", background: "#e4e4e7"}} className="my-1" />
                    <DropdownMenuItem key={"allTags"} className="px-2 py-1.5 border-0" onSelect={(e)=>{e.preventDefault();}}>
                        <div className="flex gap-1 flex-wrap">
                            {DSATopicTags.filter(x => x.toLowerCase().includes(filterString.toLowerCase())).map(x => <CreateBadgeWithAddDeleteReset key={x} selectedTags={selectedTags} currTag={toTitleCase(x)} alterTag={alterTag}/>)}
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={"reset"} className="px-2 py-1.5 border-0 w-full flex justify-end" onSelect={(e)=>{e.preventDefault();}}>
                        <Button variant={"ghost"} onClick={resetTag} ><RotateCcw /> Reset </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    );
}

const SelectSubFilter = ({filter, subFilter, onChange, disabled}: SelecSubFilterOnChangeProps) => {
    if(DSAFilter[filter as keyof typeof DSAFilter] == null || DSAFilter[filter as keyof typeof DSAFilter].length == 0){
        return (<></>);
    }
    return (
        <Select onValueChange={(value) => {onChange(value)}} disabled={disabled} value={subFilter}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select subtype" />
            </SelectTrigger>
            <SelectContent>
                {DSAFilter[filter as keyof typeof DSAFilter].map((x,index) => <SelectItem key={`subfilter-${index}`} value={x}>{x}</SelectItem>)}
            </SelectContent>
        </Select>
    );
}

const SearchInput = ({setFilterString,filterText}:SearchInputProps) => {
    return (
        <div className="flex w-full mt-2 max-w-lg items-center space-x-3">
            <Input type="text" placeholder="Filter by text/id" value={filterText} onChange={(x)=>{setFilterString(x.target.value)}} />
        </div>
    )
}

type SearchInputProps = {
    setFilterString: (x: string) => void;
    filterText: string;
};

type SelecSubFilterOnChangeProps = {
    onChange: (value: string) => void;
    filter: string
    subFilter: string
    disabled: boolean
}

type SelectFilterOnChangeProps = {
    onChange: (value: string) => void;
    filter: string
};