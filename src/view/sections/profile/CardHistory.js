import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { 
    Card, 
    CardContent, 
    CardDescription, 
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
        let array_temp = []
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

                array_temp = data.split('-')
                setExerciseSolved(array_temp)

                for (let x in array_temp) {
                    let item = array_temp[x].toString().split(',')
                    array_title.push(item[0])
                    array_points.push(item[1])
                    array_status.push(item[2])
                }
                setTitle(array_title)
                setPoint(array_points)
                setStatus(array_status)
                console.log(array_temp.length)
            }

        } catch (error) { console.error(error) }
    }

    useEffect(() => {
        getAllExerciseSolved()
    }, [])

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
                            {exerciseSolved ? (
                                exerciseSolved.map((_, index) => (
                                    <TableRow key={index}>
                                        {title.map((element, index) => (
                                            <TableCell key={index}>
                                                {element}
                                            </TableCell>
                                        ))}
                                        {points.map((element, index) => (
                                            <TableCell key={index}>
                                                {element}
                                            </TableCell>
                                        ))}
                                        {status.map((element, index) => (
                                            <TableCell className="font-bold" key={index}>
                                                {element}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ): (
                                <div className="flex justify-center w-full">
                                    Ningún ejercicio resuelto
                                </div>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </section>
    );
}