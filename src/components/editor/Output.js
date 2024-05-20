import { useState } from "react";
import { useToast } from "../ui/use-toast"
import { executeCode } from "../../api/Piston";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Tests } from "../../view/subpages_exercises/poo/constants/TargetAndInputs";

export const Output = ({
    //outputValue,
    idExercise
}) => {
    const { toast } = useToast();
    const [output, setOutput] = useState(null);
    const [render, setRender] = useState(null);

    const handleRender = (e) => {
        setRender(
            <Test idExercise={idExercise}
                idButton={e.target.id.replace('btn-test', '')} />
        );
    }

    return (
        <>
            <Card className="shadow-2xl">
                <CardContent>
                    <div className="flex space-x-2 mb-3 mt-3">
                        <Button className="bg-green-600"
                            variant="ghost"
                            onClick={(e) => handleRender(e)}
                            id="btn-test0">
                            Test 1
                        </Button>
                        <Button className="bg-green-600"
                            variant="ghost"
                            onClick={(e) => handleRender(e)}
                            id="btn-test1">
                            Test 2
                        </Button>
                        <Button variant="ghost"
                        onClick={(e) => handleRender(e)}
                        id="btn-output">
                            Output
                        </Button>
                    </div>

                    {render/*<Textarea
                        id="outputterminal"
                        className="w-full max-h-44"
                        defaultValue={output}
                        disabled
                    />*/}
                </CardContent>
            </Card>
        </>
    )
}

function Test({
    idExercise,
    idButton
}) {

    const testId = Tests.find(test => test.id === idExercise);
    /*
     * idButton allows me find the correspond test
     * Example: If "idButton" is equal to 0 so we catch
     * the position 0 in the respect array 'inputs'
     */
    const input = testId.inputs[idButton];
    return (
        <>
            <div className="justify-start">
                {input.map((element, index) => (
                    <>
                        <Label key={index}>
                            <b>{`${testId.variables[index]}: `}</b>
                            {`${element}`}
                        </Label>
                        <br />
                    </>
                ))}
            </div>
        </>
    );
}

function OutputTextarea() {
    return (
        <>
            <Textarea
                id="outputterminal"
                className="w-full max-h-44"
                disabled
            />
        </>
    );
}