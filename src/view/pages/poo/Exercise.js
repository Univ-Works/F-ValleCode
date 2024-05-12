import { HeaderPrivate } from "../../../components/header/Header";
import { BoxEditor } from "../../../components/editor/Editor";
import { Card, CardContent } from "../../../components/ui/card";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export const ResolveExercise = () => {
    var numDescription = localStorage.getItem('idExercise');

    const fileName = `${numDescription}.md`;
    const [contentMD, setContentMD] = useState('');

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
            <main className='flex min-h-sm p-24'>
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
                        <BoxEditor />
                    </div>
                </section>
            </main>
        </>
    );
}