import "./css/global.css"
import "./css/markdown_alerts.css"

import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./view/Main";
import { Login } from "./view/Login";
import { Poo } from "./view/Poo";
import { DataStructures } from "./view/DataStructures";
import { ProtectedRoute } from "./private/ProtectedRoute";
import { Profile } from "./view/Profile";
import { problemDS as ProblemsDS, problems as ProblemsPOO } from './view/constants/problems';
import { ResolveExercise } from "./view/subpages_exercises/poo/Exercise";
import { Error404 } from "./view/UnexpectedEndpoint";
import { ValidateAndSetPassword } from "./view/CodeValidate";
import { Toaster } from "./components/ui/toaster";
import { ProfileEdit } from "./view/ProfileEdit";
import { Podio } from "./view/Podio";
import { Quiz } from "./view/Quiz";
import { useEffect, useState } from "react";
import { Administration } from "./view/Admin";
import { ResolveExerciseDS } from "./view/subpages_exercises/datastructures/Exercise";

function App() {
  const [users, setUsers] = useState([]);
  const [dsProblems, setDsProblems] = useState([]);
  const [oopProblems, setOopProblems] = useState([]);

  async function getAllUsers() {
    const response = await fetch("http://localhost:8080/usr/data/allusernames", {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.text();
      let array_temp = data.split(',');
      setUsers(array_temp);
    }
  }

  async function getDataStructureProblems() {
    const response = await fetch("http://localhost:8080/showexercises?problemTopic=ds", {
      method: 'PUT',
      headers: {
        "Content-Type": "text/plain"
      }
    });

    if (response.status === 200) {
        const data = await response.text();
        const problemsArray = data.split('-').map(row => row.split(','));
        setDsProblems(problemsArray);
        localStorage.setItem('dsProblems', data);
    }
  }

  async function getOopProblems() {
    const response = await fetch("http://localhost:8080/showexercises?problemTopic=oop", {
      method: 'PUT',
      headers: {
        "Content-Type": "text/plain"
      }
    });

    if (response.status === 200) {
      const data = await response.text();
      const problemsArray = data.split('-').map(row => row.split(','));
      setOopProblems(problemsArray);
      localStorage.setItem('oopProblems', data);
    }
  }

  useEffect(() => {
    getAllUsers();
    getDataStructureProblems();
    getOopProblems();
  }, [])

  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        enableSystem
        disableTransitionOnChange>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/email/codevalidate' element={<ValidateAndSetPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Administration />} />
              <Route path='/main' element={<Main />} />
              <Route path='/quiz' element={<Quiz />} />
              {users.map((usr, index) => (
                <Route key={index}
                  path={`/profile/${usr}`}
                  element={<Profile />} />
              ))}
              <Route path='/profile/edit' element={<ProfileEdit />} />
              <Route path='/poo' element={<Poo />} />
              <Route path='/podio' element={<Podio />} />
              {/* SubRoutes of POO */}
              {oopProblems.map((problem, index) => (
                <Route
                  key={index}
                  path={`/poo/tosolve/${problem[4].trim()}`}
                  element={<ResolveExercise />}
                />
              ))}
              {dsProblems.map((problem, index) => (
                <Route
                  key={index}
                  path={`/datastructures/tosolve/${problem[4].trim()}`}
                  element={<ResolveExerciseDS />}
                />
              ))}
              <Route path='/datastructures' element={<DataStructures />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
