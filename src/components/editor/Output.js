import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { executeCode } from "@/pages/api/piston";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "../ui/textarea";

export const Output = ({ outputValue, language }) => {
    const {toast} = useToast();
    const [output, setOutput] = useState(null);

    const runCode = async () => {
        const sourceCode = outputValue;

        if (!sourceCode) return;
        
        try {
            const {run: result} = await executeCode(language, sourceCode);
            setOutput(result.output.split("\n"));
        } catch (error) {
            /*It will appeard when the data in the constants.js isn't right*/
            toast( {
                title: "An error occurred.",
                description: error.message || "Unable to run code",
                status: "error",
                duration: 2000,
            });
        }
    };

    return (
        <>
            <div className="container mb-2">
                <Button
                className="mb-2"
                variant="secondary"
                onClick={runCode}
                >
                    Run
                </Button>
                <Label className="font-extrabold mb-2">Output:</Label>
                <Textarea
                className="min-w-96 max-w-96 min-h-44 max-h-44" 
                defaultValue={output}
                disabled
                />
            </div>
        </>
    );
}