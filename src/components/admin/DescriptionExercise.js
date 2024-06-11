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
import Cookies from "js-cookie";
import { useToast } from "../ui/use-toast";
import { TickDate, TickTime } from "../../utils/CurrentTime";
import { ToastAction } from "@radix-ui/react-toast";

export const DescriptionExercise = () => {
    var token = Cookies.get('token');

    const { toast } = useToast();
    const [filter, setFilter] = useState();
    const [enableTema, setEnableTema] = useState(false);

    /* ================================================= */
    const [typeProblem, setTypeProblem] = useState('');
    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [points, setPoints] = useState('');
    const [file, setFile] = useState();

    function handleValue(val) {
        if (val === undefined || val === "" || val === null) {
            setEnableTema(false);
        } else {
            setEnableTema(true);
            setTypeProblem(val);
        }
    }

    async function registerExercise() {

        const formData = new FormData();

        formData.append('typeProblem', typeProblem);
        formData.append('topic', topic);
        formData.append('title', title);
        formData.append('category', category);
        formData.append('points', points);
        formData.append('file', file);

        try {
            const response = await fetch("http://localhost:8080/admin/addnewexercise", {
                method: 'POST',
                headers: {
                    
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            });

            if (response.status === 201) {
                toast({
                    title: "Ejercicio registrado!",
                    description: `Fecha: ${TickDate()} | Hora: ${TickTime()}`,
                    action: (
                        <ToastAction altText="Undo toast">OK</ToastAction>
                    )
                });
            } else {
                toast({
                    title: "No se pudo registrar :(",
                    description: `Fecha: ${TickDate()} | Hora: ${TickTime()}`,
                    action: (
                        <ToastAction altText="Undo toast">OK</ToastAction>
                    )
                });
            }
        } catch (e) {
            console.error(e);
        }
    }

    const onChangeFile = (e) => {
        setFile(e.target.files[0]);
    }

    function filterTopics() {
        if (typeProblem === "poo") {
            setFilter(
                pooTopics.map((element, index) => (
                    <SelectItem key={index} value={element.value}>
                        {element.label}
                    </SelectItem>
                ))
            );
        } else if (typeProblem === "ds") {
            setFilter(
                dsTopics.map((element, index) => (
                    <SelectItem key={index} value={element.value}>
                        {element.label}
                    </SelectItem>
                ))
            );
        } else if (typeProblem === "quiz") {
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
                <Select onOpenChange={filterTopics}
                onValueChange={(e) => setTopic(e)}>
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
                <Input placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
                <Select onValueChange={(e) => setCategory(e)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Categoría</SelectLabel>
                            <SelectItem value="fácil">Fácil</SelectItem>
                            <SelectItem value="medio">Medio</SelectItem>
                            <SelectItem value="difícil">Difícil</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input type="number" 
                placeholder="Puntos" 
                min="10.0" 
                step="50.0" 
                onChange={(e) => setPoints(e.target.value)}/>
                <Button
                className={typeProblem === "quiz" ? "pointer-events-none opacity-50" : ""} 
                variant="link" asChild>
                    <a
                        href="https://readme.so/editor"
                        target="_blank"
                        rel="noreferrer">
                        Crear archivo README
                    </a>
                </Button>
                <div className={`grid w-full max-w-sm items-center gap-1.5 ${typeProblem === "quiz" ? "pointer-events-none opacity-50" : ""}`}>
                    <Label htmlFor="picture">Archivo README</Label>
                    <Input id="picture" type="file"
                    onChange={(e) => onChangeFile(e)} />
                </div>
                <Button
                onClick={registerExercise}>
                    Registrar
                </Button>
            </form>
        </div>
    );
}