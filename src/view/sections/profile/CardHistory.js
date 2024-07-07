import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import {
    Card,
    CardContent,
    CardHeader
} from "../../../components/ui/card";
import { useEffect, useState } from "react";

export const CardHistory = () => {
    const [exerciseSolved, setExerciseSolved] = useState([])
    const [title, setTitle] = useState([])
    const [points, setPoint] = useState([])
    const [status, setStatus] = useState([])

    let username = localStorage.getItem('usernameFromURL');

    async function getAllExerciseSolved() {
        let array_rows = []
        let array_title = []
        let array_points = []
        let array_status = []
        try {
            const response = await fetch(`http://localhost:8080/usr/data/get-solved-exercises-by-user?username=${username}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "text/plain"
                }
            })

            if (response.ok) {
                const data = await response.text()

                array_rows = data.split('-')
                setExerciseSolved(array_rows)

                for (let x in array_rows) {
                    let [v_title, v_points, v_state] = array_rows[x].toString().split(',')
                    array_title.push(v_title)
                    array_points.push(v_points)
                    array_status.push(v_state)
                }
                setTitle(array_title)
                setPoint(array_points)
                setStatus(array_status)
            }

        } catch (error) { console.error(error) }
    }

    useEffect(() => {
        getAllExerciseSolved()
    }, [])

    const filteredExercisesSolved = exerciseSolved.filter(exercise => exercise.trim() !== '');

    return (
        <section className="w-full">
            <Card className="pb-5 shadow-2xl">
                <CardHeader className="text-2xl">
                    Ejercicios Resueltos
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Título</TableHead>
                                <TableHead>Puntos</TableHead>
                                <TableHead>Estado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredExercisesSolved.length > 0 ? (
                                filteredExercisesSolved.map((_, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {title[index]}
                                        </TableCell>
                                        <TableCell>
                                            {points[index]}
                                        </TableCell>
                                        <TableCell className="font-bold">
                                            {status[index]}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell> - </TableCell>
                                    <TableCell> - </TableCell>
                                    <TableCell> - </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </section>
    );
}