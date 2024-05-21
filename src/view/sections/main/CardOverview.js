import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export const Overview = () => {
    return (
        <section className="grid grid-cols-2">
            <Card className="grid grid-rows-3 mr-5">
                <CardHeader>
                    <CardTitle>
                        POO
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-xs">
                        Ejercicios de Programación Orientada a Objetos
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
            <Card className="grid grid-rows-3">
                <CardHeader>
                    <CardTitle>
                        Estructura de datos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-xs">
                        Ejercicios de estructura de datos lineales y no lineales
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