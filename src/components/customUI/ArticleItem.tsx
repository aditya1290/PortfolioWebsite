import { DataProps } from "@/lib/types";
import { TableRow, TableCell } from "../ui/table";
import { BadeOnlyDisplay } from "./Badges";
import Link from "next/link";

const classNameWithBorder = `hover:bg-muted transition border-b-1 border-emerald-400`;
const classNameWithout = `hover:bg-muted transition border-0`;

export const ArticleItem = (x: DataProps) => {
        return (
            <TableRow key={x.date} className={x.last ? classNameWithBorder : classNameWithout}>
                <TableCell className="text-xs text-muted-foreground">{`#${x.id}`}</TableCell>
                <TableCell className="truncate text-sm font-medium cursor-pointer"><Link className="hover:underline" target="_blank" href={x.href??""} >{x.title}</Link></TableCell>
                <TableCell>{x.level}</TableCell>
                <TableCell className="flex flex-wrap gap-1 text-right w-[20vw] text-xs">
                    {x.tags.map((y) => <BadeOnlyDisplay key={`Article-${x.date}-${y}`} currTag={y} />)}
                </TableCell>
            </TableRow>
        )
}