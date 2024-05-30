import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../../../components/ui/table";
import Cookies from "js-cookie";
import { Button } from "../../../components/ui/button";

export const ListUsers = () => {
    const token = Cookies.get('token');

    const [array, setArray] = useState([]);
    const [buttonColors, setButtonColors] = useState({});

    async function listUsers() {
        try {
            const response = await fetch("http://localhost:8080/admin/allusers", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.text();
                let rows = data.split(',');
                var array_data = [[]];
                for (let x of rows) {
                    let userInfo = x.split('-');
                    array_data.push(userInfo);
                }
                let clean_array = array_data.slice(1);
                setArray(clean_array)
            }
        } catch (e) {
            console.error(e);
        }
    }

    function changeColor(index) {
        setButtonColors(prevState => ({
            ...prevState,
            [index]: !prevState[index]  // Toggle the color for the clicked button
        }));
    }

    useEffect(() => {
        listUsers();
    }, []);

    return (
        <>
            <Table>
                <TableCaption>Lista de usuarios</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-center">id</TableHead>
                        <TableHead className="w-[100px] text-center">E-mail</TableHead>
                        <TableHead className="w-[100px] text-center">Código del alumno</TableHead>
                        <TableHead className="w-[100px] text-center">Nombre de Usuario</TableHead>
                        <TableHead className="w-[200px] text-center">Nombres</TableHead>
                        <TableHead className="w-[200px] text-center">Apellidos</TableHead>
                        <TableHead className="w-[100px] text-center">Estado</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {array.map((element, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-center text-base">
                                {element[0]}
                            </TableCell>
                            <TableCell className="text-center text-base">
                                {element[1]}
                            </TableCell>
                            <TableCell className="text-center text-base">
                                {element[2]}
                            </TableCell>
                            <TableCell className="text-center text-base">
                                {element[3]}
                            </TableCell>
                            <TableCell className="text-center text-base">
                                {element[4]}
                            </TableCell>
                            <TableCell className="text-center text-base">
                                {element[5]}
                            </TableCell>
                            <TableCell className="text-center text-base">
                                <Button variant="ghost"
                                id={index}
                                className={buttonColors[index] ? ('bg-red-800') : ('bg-sky-800')}
                                onClick={() => changeColor(index)}>
                                    {element[6]}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}