import { Code, GithubIcon, LinkedinIcon, LucideIcon } from 'lucide-react';
import { MainPageButtonProps } from '../types';

export const navBarOptions: string[] = ["blogs","projects","bookshelf"]

export const listOfButtons: MainPageButtonProps[] = [
    {
        href: "https://www.linkedin.com/in/adityagarg1290",
        text: "LinkedIn",
        key: "LinkedIn",
        Icon: <LinkedinIcon size={32} />,
    },
    {
        href: "https://github.com/aditya1290",
        text: "Github",
        Icon: <GithubIcon size={32} />,
        key: "Github"
    },
    {
        href: "https://www.leetcode.com/u/a_garg",
        text: "Leetcode",
        Icon: <Code />,
        key: "Leetcode"
    }
]

export const LEETCODE = "Léetcode";
export const GFG = "GeekForGeéks"
export const INTERVIEWBIT = "InterviewsBit"

export const DSAFilter = {
    "Problems": [LEETCODE,GFG,INTERVIEWBIT, "Others"],
    "Articles": [],
    "Sheets": ["Striver's A2Z", "Blind 75"]
}

export const tagSelectedCSS = "hover:bg-gray-300";