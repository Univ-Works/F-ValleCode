import { Editor } from "@monaco-editor/react";
import { Textarea } from "../ui/textarea";
import { LanguageSelector } from "./LanguageSelector";
import { Output } from "./Output";
import { CODE_SNIPPETS } from "./constants";
import { useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import React from "react";

export const EditorCode = () => {
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("");
    const linesCode = value.split('\n')

    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language] || "");
    }

    return (
        <div className="flex flex-row items-center justify-center">
        <div className="mb-2">
            <div className="mb-2">
                <LanguageSelector onSelect={onSelect} />
            </div>
            <div className="flex">
            <div className="mr-2">
            {linesCode.map((_, index) => (
                <React.Fragment key={index}>
                    <Label className="font-thin text-xs align-middle" style={{userSelect: 'none'}}>{index + 1}</Label>
                    <br />
                </React.Fragment>
            ))}
            </div>
            <Textarea className="min-w-96 max-w-96 min-h-72 max-h-72 font-normal" 
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
        {/*<div className="mb-2">
            <Editor 
            options={{
                minimap: {
                    enabled: false,
                },
            }}
            height="300px"
            width="500px"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            />
        </div>  */}          
        <div className="ml-5 ml-15 w-72">
            <Output outputValue={value} language={language} />
        </div>
        </div>
    );
}
/*
<Textarea className="min-w-96 max-w-96 min-h-80 max-h-80">
                {CODE_SNIPPETS[language]}
            </Textarea>
*/