import { NavigationCustom } from "@/components/NavigationMenuCustom";
import Header from "@/components/header/header";

export default function DataStructure() {
    return (
        <>
        <header>
            <div className="flex justify-between items-center mx-10 my-2">
                <NavigationCustom />
                <Header />
            </div> 
        </header>
        <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
            <h2>Estructura de datos</h2>
        </main>
        </>
    );
}