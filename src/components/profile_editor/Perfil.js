import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { TickDate, TickTime } from "../../utils/CurrentTime";
import Cookies from "js-cookie";


export const PerfilRender = () => {
    const [bio, setBio] = useState('');
    const [link, setLinks] = useState('');
    let username = localStorage.getItem('username');
    const { toast } = useToast();
    const token = Cookies.get('token');

    async function saveProfileData(e) {
        e.preventDefault();
        try {
            const url = `http://localhost:8080/usr/data/edit/bio?bio=${encodeURI(bio)}&username=${encodeURI(username)}`
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "text/plain",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                toast({
                    title: "Datos guardados",
                    description: `Fecha: ${TickDate()} - Hora: ${TickTime()}`,
                    action: (
                        <ToastAction altText="Undo toast">Ok</ToastAction>
                    )
                });
            }

        } catch (e) { console.error(e); }
    }

    async function addUrl(e) {
        e.preventDefault();
        const url = `http://localhost:8080/usr/data/edit/addurls`;

        var formData = new URLSearchParams();
        formData.append('link', link);
        formData.append('username', username);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${token}`
                },
                body: formData.toString()
            });

            if (response.ok) {
                toast({
                    title: "Url guardada",
                    description: `Fecha: ${TickDate()} - Hora: ${TickTime()}`,
                    action: (
                        <ToastAction altText="Undo toast">Ok</ToastAction>
                    )
                });
            }
        } catch (e) { console.error(e); }
    }


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
            <Textarea className="min-w-full min-h-20 max-h-20 text-ms"
                onChange={(e) => setBio(e.target.value)} />
            <Label className="text-base pt-5">
                URLs
            </Label>
            <Label className="text-xs pb-5 pt-1">
                Agrega links de tu website, blog o redes sociales.
            </Label>
            <Input type="text"
                placeholder="https://vallecode.com"
                onChange={(e) => setLinks(e.target.value)} />
            <div className="flex justify-start pt-5">
                <Button
                    variant="ghost"
                    className="h-7 text-xs"
                    onClick={(e) => addUrl(e)}>
                    Agregar URL
                </Button>
            </div>
            <div className="flex justify-start pt-5">
                <Button
                    variant="secondary"
                    onClick={(e) => saveProfileData(e)}
                >
                    Guardar
                </Button>
            </div>
        </div>
    );
}