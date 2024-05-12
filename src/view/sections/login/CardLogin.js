import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button";

export const CardLogin = ({
    extractUsername,
    extractPassword,
    loginBtn
}) => {
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
                                    onChange={extractUsername} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <span className="material-symbols-outlined">
                                    Contraseña
                                </span>
                                <Input id="password" name="password" type="password" placeholder="****"
                                    onChange={extractPassword} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={loginBtn}>Login</Button>
                    <Button variant="link">¿Olvidaste tu contraseña?</Button>
                </CardFooter>
            </Card>
        </section>
    );
}