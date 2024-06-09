import { Label } from "../components/ui/label";
import { HeaderPrivateAdmin } from "../components/header/Header";
import { ListUsers } from "./sections/admin/TableShowUsers";
import { useState } from "react";

export const Administration = () => {
    
    return (
        <>
        <HeaderPrivateAdmin />
        <nav className="flex justify-center p-2">
            <Label className="text-3xl">Área de Administración de Usuarios</Label>
        </nav>
        <main className="flex justify-center p-20">
            <ListUsers />
        </main>
        </>
    );
}