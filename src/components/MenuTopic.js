import { Button } from "./ui/button";
import { Menubar } from "./ui/menubar";
import React from "react";

export function MenuBarCustomTopic({
    block
}) {
    return (
        <>
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
        </>
    );
}