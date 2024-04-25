'use client';

import Cookies from "js-cookie";
import * as React from "react"
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import User from "@/model/user";
import { setAuthHeader } from "@/services/JwtServices";
import { useRouter } from "next/router";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const user = new User(username, password);
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const data = await response.json();
        Cookies.set('token', data.jwt, {expires: 1, sameSite: 'None', secure: true});

        router.push('/welcome');
      } else {
        console.log('Error in the request', response.statusText);
      }
    } catch(e) {
      console.error("Error", e);
    }
    
  }

  return (
    <>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>ValleCode</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-login" method="POST">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <span className="material-symbols-outlined">
                person
              </span>
              <Input id="username" name="username" placeholder="Nombre de usuario" 
              onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <span className="material-symbols-outlined">
                key
              </span>
              <Input id="password" name="password" type="password" placeholder="Contraseña" 
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={(e) => submit(e)}>Login</Button>
        <Button variant="link">¿Olvidaste tu contraseña?</Button>
      </CardFooter>
    </Card>
    </>
  );
}