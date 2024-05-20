import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot
} from "../../../components/ui/input-otp";
import { useEffect, useState } from "react";
import { useToast } from "../../../components/ui/use-toast";
import { ToastAction } from "../../../components/ui/toast";
import { TickDate } from "../../../utils/CurrentTime";

export const Validate = ({
    setIsAuthCode
}) => {
    const [code, setCode] = useState("");
    const { toast } = useToast();

    async function corroborateCode() {
        const response = await fetch(`http://localhost:8080/email/validatecode?code=${encodeURI(code)}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "text/plain"
            }
        });

        if (response.ok) {
            setIsAuthCode(true)
        } else {
            toast({
                title: "Código inválido",
                description: `Fecha: ${TickDate()}`,
                action: (
                    <ToastAction altText="Undo toast">Ok</ToastAction>
                )
            })
            console.error('Code invalid')
        }
    }

    const handleKeyUp = () => {
        if (code.length === 6) {
            corroborateCode();
        }
    }

    const handleInputChange = (e) => {
        setCode(e);
    };

    useEffect(() => {
        handleKeyUp();
    }, [code]);
    
    return (
        <>
            <div>
                <InputOTP maxLength={6} 
                onChange={(e) => handleInputChange(e)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </div>
        </>
    );
}