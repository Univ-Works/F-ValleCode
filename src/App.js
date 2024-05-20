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
import {problems as Problems} from './view/constants/problems';
import { ResolveExercise } from "./view/subpages_exercises/poo/Exercise";
import { Error404 } from "./view/UnexpectedEndpoint";
import { ValidateAndSetPassword } from "./view/CodeValidate";

function App() {

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
      </ThemeProvider>
    </>
  );
}

export default App;
