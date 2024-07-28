import { Textarea } from "../../../components/ui/textarea"
import { Card, CardContent, CardFooter } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel"
import { LoadingComponent } from "../../../components/quiz/loading-comp"
import { ShowExercisesComponentIA } from "../../../components/quiz/show-exercises-with-ai"

export const PanelAI = () => {
    const [isWaiting, setIsWaiting] = useState(true)
    const [render, setRender] = useState(<LoadingComponent />)

    useEffect(() => {
        if (isWaiting) {
            setRender(<LoadingComponent />);
        } else {
            setRender(<ShowExercisesComponentIA />);
        }
    }, [isWaiting]);

    function startExercises(e) {
        e.preventDefault();
        setIsWaiting(false);
    };

    return (
        <>
            <Card className="flex flex-col justify-between shadow-2xl w-full min-h-96">
                <CardContent className="flex justify-center text-sm">
                    <div className="flex flex-col space-y-3 mt-10">
                        {render}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center mt-auto">
                    <Button onClick={(e) => startExercises(e)}>
                        Iniciar Quiz
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}