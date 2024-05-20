import React, { useState } from "react";

import {
    Card,
    CardContent}
    from "../ui/card";
import { Editor } from "@monaco-editor/react";
import { LanguageSelector } from "./LnSelector";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "./constants";
import { Output } from "./Output";
import { Label } from "../ui/label";

export function BoxEditor({
    language,
    value,
    onChange
}) {
    //const [language, setLanguage] = useState("java");
    //const [value, setValue] = useState(CODE_SNIPPETS["java"]);

    /*const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language] || "");
    }*/
    /* 
     * @param onChange consists in extract the value
     * of the virtual vscode
     */
    return (
        <div>
            <Card className="shadow-2xl">
                <CardContent>
                    <div className="pb-2 pt-2">
                        {/*<LanguageSelector onSelect={onSelect} />*/}
                        <Label>
                            {`${language.toUpperCase()} ${LANGUAGE_VERSIONS[language]}`}
                        </Label>
                    </div>
                    <div className="">
                        <Editor
                            className="h-96"
                            theme="vs-dark"
                            language={language}
                            value={value}
                            onChange={onChange}
                            options={{
                                minimap: {
                                    enabled: false,
                                }
                            }}
                        />
                    </div>
                </CardContent>
            </Card>

            {/*<div className="content-center mt-10">
                <Output outputValue={value} language={language} />
            </div>*/}
        </div>
    );
}