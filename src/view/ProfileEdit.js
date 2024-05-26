import { HeaderPrivateUser } from "../components/header/Header";
import { CardProfileEdit } from "./sections/profile_edit/CardProfileEdit";

export function ProfileEdit() {
    return (
        <>
            <HeaderPrivateUser />
            <main className="grid grid-cols-1 gap-36 p-10">
                <CardProfileEdit />
            </main>
        </>
    );
}