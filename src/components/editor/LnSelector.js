import React from "react";

import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select"

import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

export function LanguageSelector({
    onSelect
}) {
    return (
        <>
            <Select onValueChange={onSelect}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {languages.map(([lang, version]) => (
                            <SelectItem
                                key={lang}
                                id={lang}

                                value={lang}
                            >
                                {lang}
                                &nbsp;
                                <Label>
                                    ({version})
                                </Label>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
}