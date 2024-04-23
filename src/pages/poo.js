import { ScrollAreaCustom } from "@/components/ColumnNav";
import Header from "@/components/header/header";
import { NavigationCustom } from "@/components/NavigationMenuCustom";
import { CarouselCustom } from "@/components/Carousel";
import { Label } from "@/components/ui/label";
import { QPOO } from "@/object/pooQ";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EditorCode } from "@/components/editor/Editor";

export default function POO() {
    const [topic, setTopic] = useState('Clase');
    const [answersByQ, setAnswersByQ] = useState(0);
    const topicBlock = [
        'Clase',
        'Objeto',
        'Atributo',
        'Constructor',
        'Método',
        'Encapsulación',
        'Herencia',
        'Abstracción',
        'Instanciación',
        'Interfaz',
        'Polimorfismo'
    ];

    useEffect(() => {
        /*const handleNextClick = () => {
            setAnswersByQ(prevAnswersByQ => prevAnswersByQ + 1);
        };
    
        const handlePrevClick = () => {
            setAnswersByQ(prevAnswersByQ => prevAnswersByQ - 1);
        };
    
        document.getElementById('next').addEventListener('click', handleNextClick);
        document.getElementById('prev').addEventListener('click', handlePrevClick);

        return () => {
            document.getElementById('next').removeEventListener('click', handleNextClick);
            document.getElementById('prev').removeEventListener('click', handlePrevClick);
        };*/
        //console.log(document.getElementById('span0').textContent);
    }, []);

    function topicHandle(e) {
        e.preventDefault();
        switch (e.target.textContent) {
            case 'Clase':
                setTopic('Clase')
            case 'Objeto':
                setTopic('Objeto')
            default:
                setTopic('Clase')
        }
        //console.log(e.target.textContent);
    }

    return (
        <>
        <header>
            <div className="flex justify-between items-center mx-10 my-2">
                <NavigationCustom />
                <Header />
            </div> 
        </header>
        <main
        className={`flex min-h-screen flex-col justify-between p-24`}
        >   
            <div>
                {/*<div className="container mx-auto">
                    <ScrollAreaCustom block={topicBlock} onClick={(e) => topicHandle(e)}/>
    </div>*/}
                {/*<div className="container mx-auto">
                    <CarouselCustom question={QPOO.questions}/>
                </div>*/}
                <div className="flex flex-col items-center justify-center">
                    <EditorCode />
                </div>
                {/*<div className="container mx-auto">
                        <>bur
                        <Label>A)</Label>
                        <Button variant="ghost">{QPOO.answersA[answersByQ].split("a)")}</Button>
                        <Separator className="my-2" />
                        <Label>B)</Label>
                        <Button variant="ghost">{QPOO.answersB[answersByQ].split("b)")}</Button>
                        <Separator className="my-2" />
                        <Label>C)</Label>
                        <Button variant="ghost">{QPOO.answersC[answersByQ].split("c)")}</Button>
                        <Separator className="my-2" />
                        
                        <Label>D)</Label>
                        <Button variant="ghost">{QPOO.answersD[answersByQ].split("d)")}</Button>
                        </>
                    
    </div>*/}
            </div>
        </main>
        </>
    );
}