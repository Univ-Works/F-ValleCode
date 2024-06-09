import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Progress } from "../components/ui/progress";

export function ProtectedRoute() {
    const [isAuthenticated, setIsAutenticated] = useState(false);
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(13)
    const navigate = useNavigate();

    const checkAuthentication= async () => {
        const auth = await fetchAuthentication();
        if (auth[0] === 'true') {
            setIsAutenticated(true);
            setRole(auth[1]);
        }
        
        if (auth[2] === 'Inhabilitado') {
            setIsAutenticated(false)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        checkAuthentication();
        /*const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)*/    
    },[])

    useEffect(() => {
        if (!isLoading && isAuthenticated && role === 'ADMIN') {
            navigate('/admin');
        }
    }, [isLoading, isAuthenticated, role, navigate]);

    
    
    if (isLoading) {
        return <Progress value={progress} className="w-[90%]" />;
    }

    return (
        <div>
            {isAuthenticated ? (
                <Outlet />
            ) : (
               
               <Navigate to="/" /> 
            )}
        </div>
    );
}

export const fetchAuthentication = async () => {
    var auth_array = [];
    var cookie = Cookies.get('token');

    if (cookie !== undefined) {
        console.log(cookie);
        try {
            const response = await fetch("http://localhost:8080/auth/verify-jwt", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "jwt": cookie })
            });

            if (response.ok) {
                let data = (await response.text()).split(',');
                auth_array[0] = data[0];
                auth_array[1] = data[1];
                auth_array[2] = data[2];
            }

        } catch (e) { console.error(e); }

    };
    
    return auth_array;
};