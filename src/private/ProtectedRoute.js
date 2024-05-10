import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export function ProtectedRoute() {
    const [isAuthenticated, setIsAutenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication= async () => {
            const auth = await fetchAuthentication();
            setIsAutenticated(auth);
            setIsLoading(false);
        }
        checkAuthentication();
    },[])
    
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {isAuthenticated ? (<Outlet />) : (<Navigate to="/" />)}
        </div>
    );
}

export const fetchAuthentication = async () => {
    var auth = false;
    var cookie = Cookies.get('token');

    if (cookie !== undefined) {
        console.log(cookie);
        try {
            const response = await fetch("http://localhost:8080/api/verify-jwt", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "jwt": cookie })
            });

            if (response.ok) {
                auth = true;
            }

        } catch (e) { console.error(e); }

    };
    
    return auth;
};