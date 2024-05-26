import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover";
import { useEffect, useState } from "react";

export const CardLogin = ({
    extractUsername,
    extractPassword,
    loginBtn
}) => {

    const [email, setEmail] = useState('');
    const [emailRecoveryPassword, setEmailRecoveryPassword] = useState('');
    const [canSee, setCanSee] = useState(false);
    const [typeOfInputPassword, setTypeOfInputPassword] = useState('password');

    function handleCanSee(e) {
        e.preventDefault();
        if (canSee === true) {
            setCanSee(false);
            setTypeOfInputPassword('password');
        } else {
            setCanSee(true);
            setTypeOfInputPassword('text');
        }
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleEmailRecoveryPassword(e) {
        setEmailRecoveryPassword(e.target.value);
    }

    async function sendCode() {
        const url = `http://localhost:8080/email/unknown/forgotpassword?email=${encodeURIComponent(email)}`;
        try {
            const response = await fetch(url, {
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

    async function sendPassword() {
        const url = `http://localhost:8080/email/unknown/recoverypassword?emailRecoveryPassword=${encodeURIComponent(emailRecoveryPassword)}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "text/plain"
                }
            });
    
            if (response.status === 302) {
                const password = await response.text();
                console.log(password);
            }
        } catch (e) {
            console.error(e)
        }
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
                        <div className="grid w-full justify-center items-center gap-4">
                            <div className="flex items-center gap-3">
                                <Button variant="ghost"
                                className="pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 15 15">
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0"
                                        clipRule="evenodd" />
                                </svg>
                                </Button>
                                <Input id="username" 
                                name="username" 
                                placeholder="Ingrese su usuario"
                                    onChange={extractUsername} />
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="ghost"
                                onClick={(e) => handleCanSee(e)}>
                                    {!canSee ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 15 15">
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M14.765 6.076a.5.5 0 0 1 .159.689a9.519 9.519 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.472 8.472 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 0 1-.707-.707l1.2-1.201A9.521 9.521 0 0 1 .077 6.765a.5.5 0 1 1 .848-.53a8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.159"
                                                clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 15 15">
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11m0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53C13.344 4.706 10.692 3 7.5 3m0 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                                                clipRule="evenodd" />
                                        </svg>
                                    )}
                                </Button>
                                <Input 
                                id="password" 
                                name="password" 
                                type={typeOfInputPassword}
                                placeholder="Ingrese su contraseña"
                                onChange={extractPassword} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="grid grid-cols-1">
                    <Button className="bg-red-600"
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
                                        Enviar código para cambiar la contraseña a este e-mail.
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
                    <Popover>
                        <PopoverTrigger>
                            <Button variant="link">
                                Recuperar contraseña
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="grid gap-3">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Recuperar contraseña</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Se le enviará la contraseña al correo que esté vinculado a su usario.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-2 items-center gap-2">
                                        <Input
                                            id="input-user-recovery"
                                            className="col-span-2 w-full"
                                            placeholder="Ingrese su usuario"
                                            onChange={(e) => handleEmailRecoveryPassword(e)}
                                        />
                                        <Button variant="ghost"
                                            onClick={sendPassword}>
                                            Enviar Contraseña
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