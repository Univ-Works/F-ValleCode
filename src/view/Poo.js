import '../css/markdown.css'

import React, { useEffect, useState } from "react";

import { BoxEditor } from "../components/editor/Editor";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import { problems as Problems } from "./poo/constants/problems";
import { Button } from "../components/ui/button";
import ReactMarkdown from "react-markdown";

const topics = [
  { value: "classobject", label: "Clases y Objetos", },
  { value: "encapsulation", label: "Encapsulación", },
  { value: "abstract", label: "Abstract", },
  { value: "interface", label: "Interface", },
  { value: "compoaggr", label: "Asociación entre clases", },
  { value: "inheritance", label: "Herencia", },
  { value: "polimorfism", label: "Polimorfismo", }
]

export function Poo() {
  const [filter, setFilter] = useState("");
  const [value, setValue] = useState("");
  const [content, setContent] = useState(null);

  function handleFilter(value) {
    console.log(value);
    setFilter(value)
  }

  function setItemContent(idButton) {
    setContent(<ProblemPoo numDescription={idButton.replace('btn-', '')} />);
  }

  return (
    <>
      <section className="grid gap-36 grid-cols-2 w-full">
        {content !== null ? (content) : (
          <>
            <div id="render-poo">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Seleccionar tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Temas</SelectLabel>
                    {topics.map((topic, index) => (
                      <SelectItem key={index} value={topic.value}>{topic.label}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <TableProblems renderContent={(e) => setItemContent(e.target.id)} filter={filter} />
            </div>
          </>
        )}
      </section>
    </>
  );
}

function TableProblems({
  filter,
  renderContent
}) {

  const filterProblems = filter ? Problems.filter(problem => problem.value === filter) : Problems;

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>N°</TableHead>
            <TableHead>Título</TableHead>
            <TableHead>Tema</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterProblems.map((problem, index) => (
            <TableRow key={`${index}`}>
              <TableCell>{index + 1}</TableCell>
              <TableCell><Button onClick={renderContent} id={`btn-${index + 1}`} variant="ghost">{problem.title}</Button></TableCell>
              <TableCell>{problem.tema}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

/*
 * @function ProblemPoo
 * Render the problems and shows description, code and output.
 * @Value numDescription consists in extract the 5th substring position
 * to find and show the Markdown corresponding.
 */
function ProblemPoo({
  numDescription
}) {
  const fileName = `${numDescription}.md`;
  const [contentMD, setContentMD] = useState('');

  useEffect(() => {
    import(`./interface/poo/constants/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setContentMD(res))
      })
      .catch(error => console.log(error));
  }, [fileName])


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
}