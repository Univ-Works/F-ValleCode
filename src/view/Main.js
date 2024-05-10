import Cookies from "js-cookie";
import User from "../model/User";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import { Label } from "../components/ui/label";

export function Main() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between p-24"
        >
            <section className="flex">
                <Card className="mr-5">
                    <CardHeader>
                        <CardTitle>Programación Orientada a Objetos</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Label className="text-xs">
                            Un paradigma de la programación<br />
                            basado en clases y objetos.
                        </Label>
                    </CardContent>
                    <CardFooter>
                        <Link to="/poo">
                            <Button>Ingresar</Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Estructura de datos</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Label className="text-xs">
                            Hace referencia a la manera de organizar<br />
                            y almacenar los datos en tiempo de ejecución.<br />
                        </Label>
                    </CardContent>
                    <CardFooter>
                        <Link to="/datastructures">
                            <Button>Ingresar</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </section>
        </main>
    );
}

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = new User(username, password);

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
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
                
                window.location.href = '/main';
            }

        } catch (error) { console.error("Error", e) };

    }

    return (
        <section>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>ValleCode</CardTitle>
                </CardHeader>
                <CardContent>
                    <form id="form-login" method="POST">
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <span className="material-symbols-outlined">
                                    Nombre de Usuario
                                </span>
                                <Input id="username" name="username" placeholder="PineberryCode"
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <span className="material-symbols-outlined">
                                    Contraseña
                                </span>
                                <Input id="password" name="password" type="password" placeholder="****"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={(e) => submit(e)}>Login</Button>
                    <Button variant="link">¿Olvidaste tu contraseña?</Button>
                </CardFooter>
            </Card>
        </section>
    );
}