import { HeaderPrivate } from "../../../components/header/Header";
import { BoxEditor } from "../../../components/editor/Editor";
import { Card, CardContent } from "../../../components/ui/card";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "../../../components/ui/button";
import { useToast } from "../../../components/ui/use-toast";
import { executeCode } from "../../../api/Piston";
import { Output } from "../../../components/editor/Output";
import { CODE_SNIPPETS } from "../../../components/editor/constants";
import Cookies from "js-cookie";

export const ResolveExercise = () => {
    var descriptionMD = localStorage.getItem('idExercise');

    const fileName = `${descriptionMD}.md`;
    const [contentMD, setContentMD] = useState('');

    /*
     * States of BoxEditor 
     */
    const [language, setLanguage] = useState("java");
    const [value, setValue] = useState(CODE_SNIPPETS["java"]);

    const { toast } = useToast();
    const [output, setOutput] = useState(null);

    const runCode = async () => {
        const sourceCode = document.getElementById('outputterminal').value;

        if (!sourceCode) return;
        try {
            const { run: result } = await executeCode("java", sourceCode);
            setOutput(result.output.split('\n'));
        } catch (error) {
            toast({
                title: "Un error ha ocurrido.",
                description: error.message || "Incapaz de compilar el código",
                status: "error",
                duration: 2000
            });
        }
    }

    const extractCode = (value) => {
        setValue(value)
    }

    const sendCode = async () => {
        var token = Cookies.get('token');

        try {
            await fetch("http://localhost:8080/test/poo/1", {
                method: "POST",
                headers: {
                    "content-type": "text/plain",
                    "Authorization": `Bearer ${token}`
                },
                body: value
            });
        } catch (e) { console.error(e); }

        
    }

    useEffect(() => {
        import(`../../constants/poo/${fileName}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setContentMD(res))
            })
            .catch(error => console.log(error));

    }, [fileName]);

    return (
        <>
            <HeaderPrivate />
            <main className='flex flex-col items-center justify-center pt-5'>
                <RunCode runCode={sendCode} />
                <section className="grid grid-cols-2">
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
                        <BoxEditor
                            language={language}
                            value={value}
                            onChange={extractCode} />
                        <Output />
                    </div>
                </section>
            </main>
        </>
    );
}

function RunCode({
    runCode
}) {
    /*const { toast } = useToast();
    const [output, setOutput] = useState(null);

    const runCode = async () => {

        try {
            const { run: result } = await executeCode("java", CODE_SNIPPETS["java"]);
            setOutput(result.output.split('\n'));
        } catch (error) {
            toast({
                title: "Un error ha ocurrido.",
                description: error.message || "Incapaz de compilar el código",
                status: "error",
                duration: 2000
            });
        }
    }*/

    return (
        <>
            <Button
                className="mb-5 mt-5 bg-green-600"
                onClick={runCode}
                variant="ghost"
            >
                <svg width="15" height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd">
                    </path>
                </svg> &nbsp;
                Run
            </Button>
        </>
    );
}