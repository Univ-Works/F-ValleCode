import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../../../components/ui/table";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "../../../components/ui/select";
import { problems as Problems } from "../../constants/problems";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

/*
 * Topics of exercise.
 */
const topics = [
    { value: "classobject", label: "Clases y Objetos", },
    { value: "encapsulation", label: "Encapsulación", },
    { value: "abstract", label: "Abstract", },
    { value: "interface", label: "Interface", },
    { value: "compoaggr", label: "Asociación entre clases", },
    { value: "inheritance", label: "Herencia", },
    { value: "polimorfism", label: "Polimorfismo", }
]

export const GeneralExercises = ({
    //handleName,
    filter
}) => {
    return (
        <section className="grid gap-10 grid-cols-1 w-full">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccionar tema" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Temas</SelectLabel>
                        {topics.map((topic, index) => (
                            <SelectItem
                                key={index}
                                value={topic.value}>
                                {topic.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <div>
                <TableProblems
                    
                    filter={filter} 
                />
            </div>

        </section >
    );
}
/*renderContent={renderContent}, handleName={handleName}*/
function TableProblems({
    filter,
    //handleName
}) {

    const filterProblems = filter ? Problems.filter(problem => problem.value === filter) : Problems;

    function sendName(idExercise) {
        var id = idExercise.replace('btn-','')
        localStorage.setItem('idExercise', id);
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead><b>N°</b></TableHead>
                    <TableHead><b>Título</b></TableHead>
                    <TableHead><b>Tema</b></TableHead>
                    <TableHead><b>Dificultad</b></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filterProblems.map((problem, index) => (
                    <TableRow key={`${index}`}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                            <Link to={`/poo/toresolve/${problem.title.toLowerCase().replace(' ', '')}`}>
                                <Button onClick={(e) => sendName(e.target.id)}
                                    id={`btn-${index + 1}`}
                                    variant="ghost">
                                    {problem.title}
                                </Button>
                            </Link>
                        </TableCell>
                        <TableCell><b>{problem.tema}</b></TableCell>
                        <TableCell className="text-green-600">{problem.difficulty}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}