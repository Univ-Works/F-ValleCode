import "./css/global.css"

import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Main } from "./view/Main";
import { Poo } from "./view/Poo";
import { DataStructures } from "./view/DataStructures";
import { ProtectedRoute } from "./private/ProtectedRoute";

function App() {

  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        enableSystem
        disableTransitionOnChange>
        <Header />
        <main className="flex min-h-sm items-center justify-center p-24">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/main' element={<Main />} />
                <Route path='/poo' element={<Poo />} />
                <Route path='/datastructures' element={<DataStructures />} />
              </Route>
              <Route path="*" element={<h1>Error</h1>} />
            </Routes>
          </BrowserRouter>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
