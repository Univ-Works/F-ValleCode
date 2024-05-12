import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardHeader } from "../components/ui/card";

export function Profile() {
    return (
        <>
            <section>
                <Card>
                    <CardHeader>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>TMU</AvatarFallback>
                        </Avatar>
                    </CardHeader>
                </Card>
            </section>
        </>
    );
}