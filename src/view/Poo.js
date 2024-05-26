import '../css/markdown.css'

import React, { useState } from "react";

import { GeneralExercises } from './sections/poo/ShowExercises';
import { HeaderPrivate } from '../components/header/Header';

export function Poo() {
  const [filter, setFilter] = useState("");

  function handleFilter(value) {
    setFilter(value)
  }

  return (
    <>
      <HeaderPrivate />
      <nav className='flex justify-center text-3xl font-bold pt-20'>
        <h1>
          Programación Orientada a Objetos
        </h1>
      </nav>
      <main className='flex min-h-sm items-center justify-center p-24'>
        <GeneralExercises
          handleName={handleFilter}
          filter={filter}
        />
      </main>
    </>
  );
}