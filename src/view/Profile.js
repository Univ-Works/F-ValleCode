import { HeaderPrivateUser } from "../components/header/Header";
import { AvatarSection } from "./sections/profile/CardAvatar";
import { Chart } from "./sections/profile/ChartExercise";

export function Profile() {
    return (
        <>
        <HeaderPrivateUser />
        <main className="grid grid-cols-2 gap-36">
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