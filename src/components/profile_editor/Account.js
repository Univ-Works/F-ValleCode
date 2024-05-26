import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "../../lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";


export const AccountRender = () => {
    const [date, setDate] = useState();

    return (
        <div className="grid grid-cols-1">
            <Label className="text-2xl pb-2">
                Cuenta
            </Label>
            <Label className="text-xs">
                Actualiza algunos detalles sobre ti
            </Label>
            <Separator className="my-4" />
            <Label className="text-base pb-2">
                Fecha de Nacimiento
            </Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <div className="flex justify-start pt-5">
                <Button variant="secondary">
                    Guardar Cambios
                </Button>
            </div>
        </div>
    );
}