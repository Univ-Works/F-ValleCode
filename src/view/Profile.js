import { useEffect } from "react";
import { HeaderPrivateUser } from "../components/header/Header";
import { AvatarSection } from "./sections/profile/CardAvatar";
import { Chart } from "./sections/profile/ChartExercise";

export function Profile() {
    useEffect(() => {
        const usernameFromURL = window.location.pathname.split('/profile/')[1];
        const storedUsername = localStorage.getItem('usernameFromURL');

        if (usernameFromURL && storedUsername !== usernameFromURL) {
            localStorage.setItem('usernameFromURL', usernameFromURL);
            window.location.reload();
        }
    }, []);

    return (
        <>
            <HeaderPrivateUser />
            <main className="grid grid-cols-2 gap-10">
                <div className="pl-10 pt-10">
                    <AvatarSection />
                </div>
                <div className="pt-10 pr-10">
                    <Chart />
                </div>
            </main>
        </>
    );
}