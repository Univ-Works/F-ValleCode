import Cookies from "js-cookie";
import User from "../model/User";
import { useState } from "react";
import { Header } from "../components/header/Header";
import { CardLogin } from "./sections/login/CardLogin";
import { toast } from "../components/ui/use-toast";
import { TickTime } from "../utils/CurrentTime";
import { ToastAction } from "../components/ui/toast";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = new User(username, password);

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            /*
             * secure attribute is the webpage uses https
             * secure: true = https
             * secure: false = http
             */
            if (response.ok) {
                const data = await response.json();
                Cookies.set('token', data.jwt, {
                    expires: 1,
                    sameSite: 'None',
                    secure: false
                });

                localStorage.setItem('username', username);

                window.location.href = '/main';
            } else {
                toast({
                    title: "Credenciales incorrectas",
                    description: `Hora: ${TickTime()}`,
                    action: (
                        <ToastAction altText="Undo toast">Ok</ToastAction>
                    )
                });
            }

        } catch (error) { console.error("Error", e) };

    }

    return (
        <>
        <Header />
        <main className="flex min-h-sm items-center justify-center p-24">
            <CardLogin 
            extractUsername={(e) => setUsername(e.target.value)} 
            extractPassword={(e) => setPassword(e.target.value)}
            loginBtn={(e) => submit(e)}
            />
        </main>
        </>
    );
}