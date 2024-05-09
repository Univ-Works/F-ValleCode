import { useState } from "react";
import { useToast } from "../ui/use-toast"
import { executeCode } from "../../api/Piston";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

export const Output = ({
    outputValue, language
}) => {
    const { toast } = useToast();
    const [output, setOutput] = useState(null);

    const runCode = async () => {
        const sourceCode = outputValue;

        if (!sourceCode) return;

        try {
            const { run: result } = await executeCode(language, sourceCode);
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

    return (
        <>
            <Card className="shadow-2xl">
                <CardContent>
                    <Button
                        className="mb-5 mt-5"
                        onClick={runCode}
                        variant="secondary"
                    >
                        <svg width="15" height="15" 
                        viewBox="0 0 15 15" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" 
                            fill="currentColor" 
                            fill-rule="evenodd" 
                            clip-rule="evenodd">
                            </path>
                        </svg> &nbsp;
                        Run
                    </Button>
                    <br />
                    <Label className="font-extrabold">Output:</Label>
                    <Textarea
                        id="outputterminal"
                        className="w-full max-h-44 mt-5"
                        defaultValue={output}
                        disabled
                    />
                </CardContent>
            </Card>
        </>
    )
}