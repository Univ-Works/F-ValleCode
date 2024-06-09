import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const DescriptionExercise = () => {
    return (
        <div className="mt-5">
            <form id="frm-addexercise"
                className="grid grid-cols-1 gap-4 m-10">
                <Input placeholder="Tipo" />
                <Input placeholder="Tema" />
                <Input placeholder="Título" />
                <Input placeholder="Categoría" />
                <Input type="number" placeholder="Puntos" />
                <Button variant="link" asChild>
                    <a
                        href="https://readme.so/editor"
                        target="_blank"
                        rel="noreferrer">
                        Crear archivo README
                    </a>
                </Button>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Archivo README</Label>
                    <Input id="picture" type="file" />
                </div>
                <Button>
                    Registrar
                </Button>
            </form>
        </div>
    );
}