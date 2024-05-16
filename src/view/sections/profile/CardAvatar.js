import { Button } from "../../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader } from "../../../components/ui/card";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AvatarSection = () => {
    var name = localStorage.getItem('username');
    var token = Cookies.get('token');
    const [rank, setRank] = useState(0);

    async function fetchRank() {
        try {
            const response = await fetch(`http://localhost:8080/usr/data/rankbyuser?username=${encodeURIComponent(name)}`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            /* Fix double request to the database */
            if (response.ok) { 
                const data = await response.json();
                localStorage.setItem('rank', data);
            }

            var rank_user = localStorage.getItem('rank');
            setRank(rank_user);

        } catch (e) { console.error(e); }
    }

    useEffect(() => {
        var rank_u = localStorage.getItem('rank');
        if (!rank_u) {
            fetchRank();
        } else {
            setRank(rank_u);
        }
    },[]);

    return (
        <section className="w-full">
            <Card className="pb-5 shadow-2xl">
                <CardHeader>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>TMU</AvatarFallback>
                    </Avatar>
                    <h2>
                        <b>{name ? name : 'Username Not Found'}</b>
                    </h2>
                </CardHeader>
                <CardDescription>
                    <h6 className="ml-7"><b>Rank</b> {rank}</h6>
                </CardDescription>
                <CardContent className="grid grid-cols-1 justify-items-start pt-10">
                    <Button variant="ghost">
                        Editar perfil
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
}