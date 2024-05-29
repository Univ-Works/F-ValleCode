import {
    Card,
    CardContent,
    CardHeader
} from "../../../components/ui/card";
import { Avatar, AvatarImage } from "../../../components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

export const TopPodio = ({
    pointst,
    st,
    pointnd,
    nd,
    pointrd,
    rd
}) => {

    return (
        <section className="flex justify-center">
            <div className="grid grid-cols-1 gap-4 justify-center">
                <Card className="shadow-2xl transition ease-in-out delay-150 ring-4 ring-yellow-400 hover:-translate-y-1 hover:scale-110 hover:ring-yellow-600 duration-300">
                    <CardHeader className="flex justify-center items-center">
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn" />
                            <AvatarFallback>ST</AvatarFallback>
                        </Avatar>
                        <Label className="pt-3">{pointst}</Label>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center">
                        <Label className="text-3xl">
                            <Link to={`/profile/${st}`}>
                                <Button className="text-2xl"
                                    variant="link">
                                    {st}
                                </Button>
                            </Link>
                        </Label>
                    </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-4 justify-center">
                    <Card className="shadow-2xl border-4 border-slate-400">
                        <CardHeader className="flex justify-center items-center">
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn" />
                                <AvatarFallback>ND</AvatarFallback>
                            </Avatar>
                            <Label className="pt-3">{pointnd}</Label>
                        </CardHeader>
                        <CardContent className="flex justify-center items-center">
                            <Label className="text-3xl">
                                <Link to={`/profile/${nd}`}>
                                    <Button className="text-2xl"
                                        variant="link">
                                        {nd}
                                    </Button>
                                </Link>
                            </Label>
                        </CardContent>
                    </Card>
                    <Card className="shadow-2xl border-4 border-amber-900">
                        <CardHeader className="flex justify-center items-center">
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn" />
                                <AvatarFallback>THD</AvatarFallback>
                            </Avatar>
                            <Label className="pt-3">{pointrd}</Label>
                        </CardHeader>
                        <CardContent className="flex justify-center items-center">
                            <Label>
                                <Link to={`/profile/${rd}`}>
                                    <Button className="text-2xl"
                                        variant="link">
                                        {rd}
                                    </Button>
                                </Link>
                            </Label>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}