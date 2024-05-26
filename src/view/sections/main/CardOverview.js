import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export const Overview = () => {
    return (
        <section className="grid grid-cols-2">
            <Card className="grid grid-rows-3 m-5 shadow-xl">
                <CardHeader>
                    <CardTitle>
                        POO
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-xs">
                        Ejercicios de Programación Orientado a Objetos
                    </Label>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link to="/poo">
                        <Button variant="link">
                            Ingresar
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card className="grid grid-rows-3 m-5 shadow-xl">
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
                <CardFooter className="flex justify-center">
                    <Link to="/datastructures">
                        <Button variant="link">
                            Ingresar
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card className="grid grid-rows-3 m-5 shadow-xl">
                <CardHeader>
                    <CardTitle>
                        Podio
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-xs">
                        ¡Observa tu posición en el ranking!
                    </Label>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link to="/podio">
                        <Button variant="link">
                            Ingresar
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card className="grid grid-rows-3 m-5 shadow-xl">
                <CardHeader>
                    <CardTitle>
                        Quiz
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-xs">
                        ¡Participa en un quiz!
                    </Label>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link to="/quiz">
                        <Button 
                        variant="link">
                            Ingresar
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </section>
    );
}