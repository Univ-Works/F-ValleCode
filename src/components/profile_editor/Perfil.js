import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";


export const PerfilRender = () => {
    return (
        <div className="grid grid-cols-1">
            <Label className="text-2xl pb-2">
                Perfil
            </Label>
            <Label className="text-xs">
                Esto es cómo otros usuarios te verán en el sitio.
            </Label>
            <Separator className="my-4" />
            <Label className="text-base pb-2">
                Bio
            </Label>
            <Textarea className="min-w-full min-h-20 max-h-20 text-ms" />
            <Label className="text-base pt-5">
                URLs
            </Label>
            <Label className="text-xs pb-5 pt-1">
                Agrega links de tu website, blog o redes sociales.
            </Label>
            <Input type="text" placeholder="https://vallecode.com" />
            <div className="flex justify-start pt-5">
                <Button variant="ghost" className="h-7 text-xs">
                    Agregar URL
                </Button>
            </div>
            <div className="flex justify-start pt-5">
                <Button variant="secondary">
                    Guardar
                </Button>
            </div>
        </div>
    );
}