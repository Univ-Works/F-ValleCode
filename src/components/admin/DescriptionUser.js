import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export const DescriptionUser = () => {
    const [typeUser, setTypeUser] = useState('STUDENT');

    function switching() {
        if (typeUser === 'STUDENT') {
            setTypeUser('ADMIN');
        } else {
            setTypeUser('STUDENT');
        }
    }

    return (
        <div className="mt-5">
            <form id="frm-adduser"
                className="grid grid-cols-1 gap-4 m-10">
                <Input placeholder="Código de alumno" />
                <Input type="email" placeholder="email" />
                <Input placeholder="Nombre de usuario" />
                <Input placeholder="Nombres" />
                <Input placeholder="Apellidos" />
                <Input type="password" placeholder="Contraseña" />
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" 
                    onClick={switching}
                    />
                    <Label htmlFor="airplane-mode">{typeUser}</Label>
                </div>
                <Button>
                    Registrar
                </Button>
            </form>
        </div>
    );
}