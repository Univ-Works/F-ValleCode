import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import {
    DataStructureTopics as dsTopics,
    ProgOrientedObjectTopics as pooTopics,
    QuizTopics as qTopics
} from '../../view/constants/topic';

export const DescriptionExercise = () => {
    const [value, setValue] = useState('');
    const [filter, setFilter] = useState();
    const [enableTema, setEnableTema] = useState(false);

    function handleValue(val) {
        if (val === undefined || val === "" || val === null) {
            setEnableTema(false);
        } else {
            setEnableTema(true);
        }

        setValue(val);
    }

    function filterTopics() {
        if (value === "poo") {
            setFilter(
                pooTopics.map((element, index) => (
                    <SelectItem key={index} value={element.value}>
                        {element.label}
                    </SelectItem>
                ))
            );
        } else if (value === "ds") {
            setFilter(
                dsTopics.map((element, index) => (
                    <SelectItem key={index} value={element.value}>
                        {element.label}
                    </SelectItem>
                ))
            );
        } else if (value === "quiz") {
            setFilter(
                qTopics.map((element, index) => (
                    <SelectItem key={index} value={element.value}>
                        {element.label}
                    </SelectItem>
                ))
            );
        }
    }

    return (
        <div className="mt-5">
            <form id="frm-addexercise"
                className="grid grid-cols-1 gap-4 m-10">
                <Select onValueChange={(v) => handleValue(v)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Seleccionar Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Tipo</SelectLabel>
                            <SelectItem value="poo">Programación Orientada a Objetos</SelectItem>
                            <SelectItem value="ds">Estructura de datos</SelectItem>
                            <SelectItem value="quiz">Quiz</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onOpenChange={filterTopics}>
                    <SelectTrigger className={enableTema ? "" : "pointer-events-none opacity-50"}>
                        <SelectValue placeholder="Seleccionar Tema" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Tema</SelectLabel>
                            {filter}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input placeholder="Título" />
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Categoría</SelectLabel>
                            <SelectItem value="easy">Fácil</SelectItem>
                            <SelectItem value="medium">Medio</SelectItem>
                            <SelectItem value="hard">Difícil</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input type="number" placeholder="Puntos" min="10.0" step="50.0" />
                <Button
                className={value === "quiz" ? "pointer-events-none opacity-50" : ""} 
                variant="link" asChild>
                    <a
                        href="https://readme.so/editor"
                        target="_blank"
                        rel="noreferrer">
                        Crear archivo README
                    </a>
                </Button>
                <div className={`grid w-full max-w-sm items-center gap-1.5 ${value === "quiz" ? "pointer-events-none opacity-50" : ""}`}>
                    <Label htmlFor="picture">Archivo README</Label>
                    <Input id="picture" type="file" />
                </div>
                <Button>
                    Registrar
                </Button>
            </form>
        </div>
    );
}