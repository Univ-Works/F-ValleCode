import { NavigationCustom } from "@/components/NavigationMenuCustom";
import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
 
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Label } from "@radix-ui/react-dropdown-menu";

export default function Welcome() {
    return(
        <>
            <header>
                <div className="flex justify-between items-center mx-10 my-2">
                    <Header />
                </div> 
            </header>
            <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
            >
                <section className="flex">
                <Card className="mr-5">
                    <CardHeader>
                        <CardTitle>Programación Orientada a Objetos</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Label className="text-xs">
                            Un paradigma de la programación<br/>
                            basado en clases y objetos.
                        </Label>
                    </CardContent>
                    <CardFooter>
                        <Button>Ingresar</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Estructura de datos</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Label className="text-xs">
                            Hace referencia a la manera de organizar<br/> 
                            y almacenar los datos en tiempo de ejecución.<br/>
                        </Label>
                    </CardContent>
                    <CardFooter>
                        <Button>Ingresar</Button>
                    </CardFooter>
                </Card>
                </section>
            </main>
        </>
    );
}