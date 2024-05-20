import { Label } from "../components/ui/label";
import { Header } from "../components/header/Header";
import { Validate } from "./sections/codevalidate/Validate";
import { SetPasswordSection } from "./sections/codevalidate/SetUpPassword";
import { useEffect, useState } from "react";

export function ValidateAndSetPassword() {
    const [isAuthCode, setIsAuthCode] = useState(<Validate />);
    const [naving, setNaving] = useState(<NavTitleCode />)

    useEffect(() => {
        function handleKeyPress(event) {
            if (event.key === 'Enter' || event.keyCode === 13) {
                setIsAuthCode(<SetPasswordSection />);
                setNaving(<NavTitlePassword />)
            }
        }

        const sectionCode = document.getElementById('section-code');
        sectionCode.addEventListener('keyup', handleKeyPress);

        return () => {
            sectionCode.removeEventListener('keyup', handleKeyPress);
        };
    }, [])

    return (
        <>
            <Header />
            <nav className="flex items-center justify-center p-5">
                <Label className="text-xl">
                    {naving}
                </Label>
            </nav>
            <section className="grid grid-rows-2 justify-center p-20"
                id="section-code"
                tabIndex="0"
            >
                {isAuthCode}
            </section>
        </>
    );
}

const NavTitleCode = () => {
    return (
        <>
            <Label className="text-xl">
                    Ingresa el código que fue proporcionado a su e-mail 📨.
            </Label>
        </>
    );
}

const NavTitlePassword = () => {
    return (
        <>
            <Label className="text-xl">
                 {`Mi correo => ${localStorage.getItem('email')}`}.
            </Label>
        </>
    )
}