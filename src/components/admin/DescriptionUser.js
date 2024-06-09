import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import Cookies from "js-cookie";
import { useToast } from "../ui/use-toast";
import { TickTime } from "../../utils/CurrentTime";
import { ToastAction } from "../ui/toast";
import { UserSignUp } from "../../model/UserSignUp";

export const DescriptionUser = () => {
    const [codeAlumni, setCodeAlumni] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [names, setNames] = useState('');
    const [lastNames, setLastNames] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('STUDENT');
    const token = Cookies.get('token');
    const { toast } = useToast();

    function switching() {
        if (role === 'STUDENT') {
            setRole('ADMIN');
        } else {
            setRole('STUDENT');
        }
    }

    async function addNewUser(e) {
        e.preventDefault();
        let user = new UserSignUp(
            codeAlumni,
            email,
            username,
            names,
            lastNames,
            password,
            role
        );
        try {
            const response = await fetch("http://localhost:8080/admin/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(user)
            });

            if (response.status === 201) {
                toast({
                    title: "Usuario registrado",
                    description: `Hora: ${TickTime()}`,
                    action: (
                        <ToastAction altText="Undo toast">Ok</ToastAction>
                    )
                });
            } else {
                toast({
                    title: "Error: No se pudo registrar el usuario",
                    description: `Hora: ${TickTime()}`,
                    action: (
                        <ToastAction altText="Undo toast">Ok</ToastAction>
                    )
                });
            }
        } catch (e) { console.error(e); }
    }

    return (
        <div className="mt-5">
            <form id="frm-adduser"
                method="POST"
                className="grid grid-cols-1 gap-4 m-10"
                >
                <Input placeholder="Código de alumno"
                onChange={(e) => setCodeAlumni(e.target.value)} />
                <Input type="email" placeholder="email"
                onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Nombre de usuario"
                onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder="Nombres"
                onChange={(e) => setNames(e.target.value)} />
                <Input placeholder="Apellidos"
                onChange={(e) => setLastNames(e.target.value)} />
                <Input type="password" placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)} />
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" 
                    onClick={switching}
                    />
                    <Label htmlFor="airplane-mode">{role}</Label>
                </div>
                <Button
                onClick={(e) => addNewUser(e)}>
                    Registrar
                </Button>
            </form>
        </div>
    );
}