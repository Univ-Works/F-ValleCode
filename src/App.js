import "./css/global.css"

import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./view/Main";
import { Login } from "./view/Login";
import { Poo } from "./view/Poo";
import { DataStructures } from "./view/DataStructures";
import { ProtectedRoute } from "./private/ProtectedRoute";
import { Profile } from "./view/Profile";
import {problems as Problems} from './view/constants/problems';
import { ResolveExercise } from "./view/subpages/poo/Exercise";
import { Error404 } from "./view/UnexpectedEndpoint";

function App() {

  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        enableSystem
        disableTransitionOnChange>
        {/*<main className="flex min-h-sm items-center justify-center p-24">*/}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/main' element={<Main />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/poo' element={<Poo />} />
              {/* SubRoutes of POO */}
              {Problems.map((problem, index) => (
                <Route
                  key={index}
                  path={`/poo/tosolve/${problem.title.toLowerCase().replace(' ', '')}`}
                  element={<ResolveExercise />}
                />
              ))}
              <Route path='/datastructures' element={<DataStructures />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        {/*</main>*/}
      </ThemeProvider>
    </>
  );
}

export default App;
