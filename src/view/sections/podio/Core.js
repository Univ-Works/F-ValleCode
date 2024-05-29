import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

export const Core = ({
    lastUsersRank,
    startsIndex,
    endIndex
}) => {

    return (
        <section className="flex justify-center p-24">
            <Table className="border-separate border-spacing-2">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center border border-y-red-500" >Posición</TableHead>
                        <TableHead className="text-center border border-y-red-500" >Nombre de Usuario</TableHead>
                        <TableHead className="text-center border border-y-red-500" >Puntos</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {lastUsersRank.slice(startsIndex, endIndex).map((user, index) => (
                        <React.Fragment key={index}>
                            <TableRow>
                                <TableCell className="text-center text-base">
                                    {startsIndex + index + 1}
                                </TableCell>
                                <TableCell className="text-center text-base">
                                    <Link to={`/profile/${user[0]}`}>
                                        <Button variant="link">
                                            {user[0]}
                                        </Button>
                                    </Link>
                                </TableCell>
                                <TableCell className="text-center text-base">
                                    {user[1]}
                                </TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </section>
    );
}