'use client';

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

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [passowrd, setPassword] = React.useState('');
  const user = new User(username, passowrd);

  function getCredentials() {
    btnLogin.addEventListener('click', async function(e) {
      e.preventDefault();

      const response = await fetch("http://localhost:8080/user/login",{
        method: 'POST',
        mode: 'cors',
        headers: {"Content-type":"application/json"},
        referrerPolicy: 'cross-origin',
        body: JSON.stringify(user)
      })
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          return null;
        }
      }).then(data => {
        if (data !== null) {
          setAuthHeader(data["token"]);
        } else {
          setAuthHeader(null);
        }
      })
    });
  }

  function submit() {
    document.getElementById('form-login').submit();
  }

  return (
    <>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Hello again!</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-login" autoCapitalize="off"
        onSubmit={getCredentials}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <span className="material-symbols-outlined">
                person
              </span>
              <Input id="username" name="username" placeholder="Username" 
              onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <span className="material-symbols-outlined">
                key
              </span>
              <Input id="password" name="password" type="password" placeholder="password" 
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={submit}>Login</Button>
      </CardFooter>
    </Card>
    </>
  );
}