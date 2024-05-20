import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ToastAction } from "../../../components/ui/toast";
import { useToast } from "../../../components/ui/use-toast";
import { TickDate, TickTime } from "../../../utils/CurrentTime";

export const SetPasswordSection = () => {
    const [newPassword, setNewPassword] = useState('');
    const { toast } = useToast();

    var email = localStorage.getItem('email');

    function extractPasswordFromInput(e) {
        setNewPassword(e.target.value);
    }

    async function handleSetPassword() {
        const url = `http://localhost:8080/email/known/setpassword?email=${encodeURI(email.trim())}&newPassword=${encodeURI(newPassword)}`
        
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "text/plain"
                }
            });

            if (response.ok) {
                toast({
                    title: "Contraseña actualizada",
                    description: `Fecha: ${TickDate()} | hora: ${TickTime()}`,
                    action: (
                        <ToastAction altText="Undo toast">Ok</ToastAction>
                    )
                })
            };

        } catch (e) { console.error(e); }
    }
    
    return (
        <>
        <div className="grid gap-2 w-full">
            <div className="grid gap-3 w-56">
                <Input type="password" 
                placeholder="Nueva contraseña"
                onChange={(e) => extractPasswordFromInput(e)} />
                <Input type="password" 
                placeholder="Confirmar nueva contraseña" />
            </div>
            <div className="flex justify-center pt-5">
                <Button variant="outline" 
                className="bg-green-600"
                onClick={handleSetPassword}>
                    Cambiar contraseña
                </Button>
            </div>
        </div>
        </>
    );
}