import React, { useRef, useState } from "react";

import {
    Card,
    CardContent,
    CardHeader
}
    from "../ui/card";
import { Editor } from "@monaco-editor/react";
import { LanguageSelector } from "./LnSelector";
import { CODE_SNIPPETS } from "./constants";
import { Output } from "./Output";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BorderAllIcon } from "@radix-ui/react-icons";

export function BoxEditor() {
    const [language, setLanguage] = useState("java");
    const [value, setValue] = useState("");

    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language] || "");
    }

    return (
        <div>
            <Card className="shadow-2xl">
                <CardContent>
                    <div className="pb-2 pt-2">
                        <LanguageSelector onSelect={onSelect} />
                    </div>
                    <div className="">
                        <Editor
                            height="200px"
                            theme="vs-dark"
                            language={language}
                            defaultValue="// some comment"
                            value={value}
                            onChange={(value) => setValue(value)}
                            options={{
                                minimap: {
                                    enabled: false,
                                }
                            }}
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="content-center mt-10">
                <Output outputValue={value} language={language} />
            </div>
        </div>
    );
}