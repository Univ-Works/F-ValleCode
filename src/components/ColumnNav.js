import * as React from "react"
 
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button";

export function ScrollAreaCustom({
  block,
  onClick
}) {
  return (
    <>
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Sub-Temas</h4>
            {
            block.map((elements, index) => 
                <React.Fragment key={index}>
                    <Button className="text-xs" 
                    id={`${elements}`} 
                    variant="ghost"
                    onClick={onClick}>{elements}</Button>
                    {index < block.length - 1 && <Separator className="my-2" />}
                </React.Fragment>
            )
            }
      </div>
    </ScrollArea>
    </>
  )
}