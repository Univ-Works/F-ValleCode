import React from "react";
import { HeaderPrivate } from "../components/header/Header";
import { Overview } from "./sections/main/CardOverview";

export function Main() {
    return (
        <>
            <HeaderPrivate />
            <main
                className="flex min-h-screen flex-col items-center justify-between p-24"
            >
                <Overview />
            </main>
        </>
    );
}