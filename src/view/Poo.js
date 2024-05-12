import '../css/markdown.css'

import React, { useState } from "react";

import { GeneralExercises } from './sections/poo/ShowExercises';
import { HeaderPrivate } from '../components/header/Header';

export function Poo() {
  const [filter, setFilter] = useState("");

  function handleFilter(value) {
    console.log(value);
    setFilter(value)
  }

  return (
    <>
      <HeaderPrivate />
      <main className='flex min-h-sm items-center justify-center p-24'>
        <GeneralExercises
          filter={filter}
        />
      </main>
    </>
  );
}
/*renderContent={(e) => setItemContent(e.target.id)} handleName={(e) => extractId(e.target.value)}*/

/*
 * @function ProblemPoo
 * Render the problems and shows description, code and output.
 * @Value numDescription consists in extract the 5th substring position
 * to find and show the Markdown corresponding.
 */
/*function ProblemPoo({
  numDescription
}) {
  const fileName = `${numDescription}.md`;
  const [contentMD, setContentMD] = useState('');

  useEffect(() => {
    import(`./constants/poo/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setContentMD(res))
      })
      .catch(error => console.log(error));
  }, [fileName]);


  return (
    <>
      <div>
        <Card className="shadow-2xl">
          <CardContent>
            <div className="mt-10 mb-5" id="markdown-body">
              <ReactMarkdown>{contentMD}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <BoxEditor />
      </div>
    </>
  );
}*/