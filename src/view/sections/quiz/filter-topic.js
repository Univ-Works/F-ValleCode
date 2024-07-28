import { ToggleGroup, ToggleGroupItem } from "../../../components/ui/toggle-group";
import { Label } from "../../../components/ui/label";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { ProgOrientedObjectTopics as OOP, DataStructureTopics as DS } from "../../constants/topic";
import { Separator } from "../../../components/ui/separator";

export const FilterTopic = () => {
    return (
        <ScrollArea className="grid grid-cols-1 h-2/3 min-h-2/3 w-2/3 rounded-md border shadow-inner">
            <>
                <Label className="flex justify-center font-bold pt-5 pb-5">POO</Label>
                <ToggleGroup type="single">
                    {OOP.map((element, index) => (
                        <>
                            <ToggleGroupItem key={index} value={`${element.label}`}
                                className="text-sm space-y-2">
                                {element.label}
                            </ToggleGroupItem>
                        </>
                    ))}
                </ToggleGroup>
                <Separator className="my-2"/>
                <Label className="flex justify-center font-bold pt-5 pb-5">Estructura de datos</Label>
                <ToggleGroup type="single" className="gird grid-cols-1 gap-2 justify-start">
                    {DS.map((element, index) => (
                        <>
                            <ToggleGroupItem key={index} value={`${element.label}`}
                                className="text-sm space-y-2">
                                {element.label}
                            </ToggleGroupItem>
                        </>
                    ))}
                </ToggleGroup>
            </>
        </ScrollArea>
    );
}