import React, {Component, useState} from "react";
import { Jwt } from "jsonwebtoken";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

export function ProtectedRoute({
    auth
}) {
    return (
        <div>
            {auth ? (<Outlet />) : (<Navigate to="/" />)}
        </div>
    );
}

export function Authenticated() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const secret_key = process.env.SECRET_KEY;

    return isAuthenticated;
}