import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import React from "react"
import { Button } from "./ui/button"
 
export function MenubarCustom({
    block
}) {
  return (
    <>
    <Menubar>
        {
            block.map((elements, index) => 
            <React.Fragment key={index}>
                <Button className="text-xs"
                id={`${elements}`} 
                variant="ghost">
                    {elements}
                </Button>
            </React.Fragment>
            )
        }
    </Menubar>
    </>   
  )
}