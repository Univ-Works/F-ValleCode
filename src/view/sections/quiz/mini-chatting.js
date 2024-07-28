import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../../components/ui/drawer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../../components/ui/hover-card";
import { Label } from "../../../components/ui/label";
import { useEffect, useRef, useState } from "react";

export const ChatWithAI = () => {
    const [response, setResponse] = useState("")
    const [message, setMessage] = useState("")
    const [wasSent, setWasSent] = useState(false)
    const ws = useRef(null)

    async function sendMessage() {
        if (message !== "") {
            ws.current = new WebSocket("ws://localhost:7072/chatting")

            ws.current.onopen = () => {
                console.log("Connected to websocket server (Rust)")
                ws.current.send(message)
                setMessage("")
                setWasSent(true)
            }
            ws.current.onmessage = (event) => {
                const messageFromServer = event.data;
                setResponse(prevResponse => prevResponse + " " + messageFromServer)
            }
            ws.current.onclose = () => {
                console.log("Desconectado del servidor WebSocket");
                setWasSent(false)
            };
        }
    };

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className="drop-shadow-2xl">🤖</Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col h-full w-full">
                <DrawerHeader className="flex justify-start flex-col mr-10">
                    <DrawerTitle>Valle AI</DrawerTitle>
                    <DrawerDescription>Puede tomar unos segundos tu consulta.</DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-1 justify-center w-full p-4 pb-0">
                    <Label className="font-bold">CHAT</Label>
                </div>
                <div className="grid grid-cols-1 p-4 pb-0">
                    {wasSent ? (
                        <div className="flex justify-end w-2/4">
                        <div className="shadow-2xl m-5 bg-blue-100 p-4 rounded-lg self-end">
                            {message}
                        </div>
                    </div>
                    ) : <></>}
                    
                    <div className="flex justify-start w-2/4">
                        <div className="shadow-2xl m-5 bg-white p-4 rounded-lg self-start">
                            {response}
                        </div>
                    </div>
                </div>

                <DrawerFooter>
                    <div className="flex justify-center m-4 space-x-2">
                        <Textarea className="h-32 min-h-32 max-h-48" placeholder="Menciona tu consulta" onChange={(e) => setMessage(e.target.value)} value={message} />
                        <Button className="m-2" onClick={(e) => sendMessage(e.target.value)}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </Button>
                    </div>
                    <DrawerClose asChild>
                        <Button variant="destructive">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}