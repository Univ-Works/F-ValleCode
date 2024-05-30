import { Label } from "../components/ui/label";
import { Header } from "../components/header/Header";
import { ListUsers } from "./sections/admin/TableShowUsers";

export const Administration = () => {
    return (
        <>
        <Header />
        <nav className="flex justify-center p-2">
            <Label className="text-3xl">Área de administración</Label>
        </nav>
        <main className="flex justify-center p-20">
            <ListUsers />
        </main>
        </>
    );
}