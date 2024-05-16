import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export const Overview = () => {
    return (
        <section className="flex">
            <Card className="mr-5">
                <CardHeader>
                    <CardTitle>
                        Programación Orientada a Objetos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-xs">
                        Un paradigma de la programación<br />
                        basado en clases y objetos.
                    </Label>
                </CardContent>
                <CardFooter>
                    <Link to="/poo">
                        <Button 
                        variant="ghost">
                            Ingresar
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Estructura de datos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-xs">
                        Hace referencia a la manera de organizar<br />
                        y almacenar los datos en tiempo de ejecución.<br />
                    </Label>
                </CardContent>
                <CardFooter>
                    <Link to="/datastructures">
                        <Button
                        variant="ghost">
                            Ingresar
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </section>
    );
}