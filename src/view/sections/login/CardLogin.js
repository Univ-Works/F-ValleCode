import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover";
import { useState } from "react";

export const CardLogin = ({
    extractUsername,
    extractPassword,
    loginBtn
}) => {

    const [email, setEmail] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    async function sendCode() {
        try {
            const response = await fetch(`http://localhost:8080/email/unknown/forgotpassword?email=${encodeURIComponent(email)}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "text/plain"
                }
            });

            if (response.ok) {
                const email = await response.text();
                localStorage.setItem('email', email);

                window.location.href = '/email/codevalidate';
            }
        } catch (e) { console.error(e); }
    }

    return (
        <section>
            <Card className="w-[350px] shadow-2xl">
                <CardHeader>
                    <CardTitle className="text-3xl">
                        ValleCode
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form id="form-login" method="POST">
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <span className="material-symbols-outlined text-sm">
                                    <b>Nombre de Usuario</b>
                                </span>
                                <Input id="username" name="username" placeholder="PineberryCode"
                                    onChange={extractUsername} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <span className="material-symbols-outlined text-sm">
                                    <b>Contraseña</b>
                                </span>
                                <Input id="password" name="password" type="password" placeholder="****"
                                    onChange={extractPassword} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="bg-lime-600"
                        onClick={loginBtn}
                        variant="ghost">
                        Login
                    </Button>

                    <Popover>
                        <PopoverTrigger>
                            <Button variant="link">
                                ¿Olvidaste tu contraseña?
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="grid gap-3">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Generar código</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Enviar el código para cambiar la contraseña a este e-mail.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-2 items-center gap-2">
                                        <Input
                                            id="input-email"
                                            className="col-span-2 w-full"
                                            placeholder="miemail@ucv.edu.pe"
                                            onChange={(e) => handleEmail(e)}
                                        />
                                        <Button variant="ghost"
                                        onClick={sendCode}>
                                            Enviar Código
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </CardFooter>
            </Card>
        </section>
    );
}