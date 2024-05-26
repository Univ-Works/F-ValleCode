import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function HoverCardCustom({
    trigger,
    content,
}) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {trigger}
            </HoverCardTrigger>
            <HoverCardContent className="w-50">
                <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{content}</h4>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}