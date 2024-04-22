import { NextResponse } from "next/server";
import {jwtVerify}  from 'jose';
//import jwt from "jsonwebtoken";
//import Cookies from "js-cookie";

export async function middleware(req) {
    const token = req.cookies.get('token');
    const url = req.nextUrl.pathname;
    const secret_key = process.env.SECRET_KEY;
    if (!token) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    try {
        let cleanToken = JSON.stringify(token.value).replace(/"/g,'');
        const result = validateToken(cleanToken, decodeKey(secret_key));

        if (url == "/" && result) {
            return NextResponse(new URL('/welcome', req.url))
        }

        if (url == "/welcome" && !result) {
            return NextResponse(new URL('/', req.url))
        }
        
    } catch (error) { 
        console.error("Error: ",error); 
        return NextResponse.next();
    }

    
}

function validateToken(token, secret_key) {
    try {
        jwtVerify(token, secret_key);
        return true;
    } catch (e) {
        console.error("Error: ", e);
        return false;
    }
}

function decodeKey(secret_key) {
    const decoded = Buffer.from(secret_key, 'base64');
    return decoded;
}

export const config = {
    matcher: [
        '/welcome/:path*',
        '/profile/:path*'
    ]
}