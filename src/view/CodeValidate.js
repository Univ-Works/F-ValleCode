import { Label } from "../components/ui/label";
import { Header } from "../components/header/Header";
import { Validate } from "./sections/codevalidate/Validate";
import { SetPasswordSection } from "./sections/codevalidate/SetUpPassword";
import { useEffect, useState } from "react";

export function ValidateAndSetPassword() {
    const [isAuthCode, setIsAuthCode] = useState(false);
    const [render, setRender] = useState(<Validate setIsAuthCode={setIsAuthCode}/>)
    const [naving, setNaving] = useState(<NavTitleCode />)

    useEffect(() => {
        if (isAuthCode) {
            setNaving(<NavTitlePassword />);
            setRender(<SetPasswordSection />);
        }
    }, [isAuthCode]);

    return (
        <>
            <Header />
            <nav className="flex items-center justify-center p-5">
                {naving}
            </nav>
            <section className="grid grid-rows-2 justify-center p-20"
                id="section-code"
                tabIndex="0"
            >
                {render}
            </section>
        </>
    );
}

const NavTitleCode = () => {
    return (
        <div className="flex justify-center w-96 text-justify">
            <Label className="text-xl">
                    {`Ingresa el código que fue proporcionado a ${localStorage.getItem('email')}`} 📨.
            </Label>
        </div>
    );
}

const NavTitlePassword = () => {
    return (
        <>
            <Label className="text-xl">
                 {`${localStorage.getItem('email')}`}.
            </Label>
        </>
    )
}