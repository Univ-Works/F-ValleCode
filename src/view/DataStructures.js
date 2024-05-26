import { useState } from "react";
import { HeaderPrivate } from "../components/header/Header";
import { ShowExercises } from "./sections/data_structures/ShowExercises";

export function DataStructures() {
    const [filter, setFilter] = useState("");

    function handleFilter(value) {
        setFilter(value)
    }

    return (
        <>
            <HeaderPrivate />
            <nav className='flex justify-center text-3xl font-bold pt-20'>
                <h1>
                    Estructura de Datos
                </h1>
            </nav>
            <main className='flex min-h-sm items-center justify-center p-24'>
                <ShowExercises
                    handleName={handleFilter}
                    filter={filter}
                />
            </main>
        </>
    );
}