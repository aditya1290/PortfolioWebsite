"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

const mainGridValues:(number | null)[][] = [
    [null,1,null,5,null,null,4,9,null],
    [4,3,null,null,null,1,null,null,2],
    [null,null,null,9,4,null,null,6,1],
    [null,null,3,null,5,null,null,2,null],
    [8,null,null,null,2,null,null,null,9],
    [null,2,null,null,8,null,6,null,null],
    [5,8,null,null,null,3,null,null,null],
    [1,null,null,2,null,null,null,3,8],
    [null,6,7,null,null,4,null,1,null]
]

const filledGrid: (number)[][] = [

]

export default function Home() {
  const [grid, setGrid] = useState<(null | number)[][]>(mainGridValues);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleChange = (row: number, col: number, value: string) => {
    const digit = (/^[1-9]$/.test(value) && Number(value)>0 && Number(value) <=9) ? Number(value) : null;
    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = digit;
    setGrid(newGrid);
    handleClick(digit);
  };

  const handleClick = (value: (null|number)) => {
    if (/^[1-9]$/.test(String(value))) {
      setSelectedValue(value);
    } else {
      setSelectedValue(null);
    }
  };

  const checkForError = ():boolean => {

    for(let i = 0;i<9;i++){
        const s = new Set();
        for(let j = 0;j<9;j++){
            if(grid[i][j] != null){
                if(s.has(grid[i][j]))       return true;
                s.add(grid[i][j]);
            }
        }
    }
    for(let j = 0;j<9;j++){
        const s = new Set();
        for(let i = 0;i<9;i++){
            if(grid[i][j] != null){
                if(s.has(grid[i][j]))       return true;
                s.add(grid[i][j]);
            }
        }
    }

    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            const s = new Set();
            for(let i1 =i*3;i1<i*3+3;i1++){
                for(let j1 = j*3;j1<j*3+3;j1++){
                    if(grid[i1][j1] != null){
                        if(s.has(grid[i1][j1]))     return true;
                        s.add(grid[i1][j1]);
                    }
                }
            }
        }
    }
    return false;
  }

  const completeGrid = () => {
    setGrid(filledGrid);
  }

  const save = () => {
    localStorage.setItem("Saved_Sudoku",JSON.stringify(grid));
  }
  const reloadSaved = () => {
    const data = JSON.parse(localStorage.getItem("Saved_Sudoku")??JSON.stringify(mainGridValues))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="flex flex-col gap-1 items-end">
            <div className="flex gap-1">
                <Button className="bg-green-500" onClick={save} >Save</Button>
                <Button className="bg-teal-500" onClick={reloadSaved}>Load Saved</Button>
            </div>
            <div className="grid grid-cols-9 w-[540px] h-[540px] border-4 border-black">
            {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                
                const isThickBottom = (rowIndex+1)%3 == 0;
                const isThickRight = (colIndex+1)%3 == 0;
                const isThickTop = rowIndex%3 == 0;
                const isThickLeft = colIndex%3 == 0;

                const isHighlighted = selectedValue && cell === selectedValue;
                const isError = checkForError();

                return (
                    <input
                    key={`${rowIndex}-${colIndex}`}
                    type="text"
                    value={cell == null ? "" : String(cell)}
                    maxLength={1}
                    readOnly={mainGridValues[rowIndex][colIndex] != null}
                    onChange={(e) =>
                        handleChange(rowIndex, colIndex, e.target.value)
                    }
                    onClick={() => {handleClick(cell); checkForError();}}
                    className={`
                        w-full h-full text-center text-xl
                        border border-gray-400
                        focus:outline-none focus:ring-0
                        focus:border-blue-900
                        
                        ${isThickBottom ? "border-b-3 border-black" : ""}
                        ${isThickLeft ? "border-l-3 border-black" : ""}
                        ${isThickTop ? "border-t-3 border-black" : ""}
                        ${isThickRight ? "border-r-3 border-black" : ""}
                        
                        ${isError ? "text-red-400" : ""}
                        ${isHighlighted ? "bg-gray-100 text-green-400" : "bg-white"}
                        ${mainGridValues[rowIndex][colIndex] ? "font-bold" : "font-normal"}
                        `}
                    />
                );
                })
            )}
            </div>
            <Button className="w-[20%]" onClick={()=>{completeGrid();}} variant="destructive" size="sm">Complete</Button>

        </div>
    </div>
  );
}
