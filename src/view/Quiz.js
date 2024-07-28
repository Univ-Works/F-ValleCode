import { HeaderPrivate } from "../components/header/Header";
import { FilterTopic } from "./sections/quiz/filter-topic";
import { ChatWithAI } from "./sections/quiz/mini-chatting";
import { PanelAI } from "./sections/quiz/panel-questions";

export function Quiz() {
    return (
        <>
            <HeaderPrivate />
            <main className="grid grid-cols-2 gap-0 justify-center pr-10 pl-10">
                <section className="">
                    <FilterTopic />
                </section>
                <section className="grid grid-cols-1">
                    <PanelAI />
                    <div className="flex justify-end mt-10">
                        <ChatWithAI />
                    </div>
                </section>
            </main>
        </>

    );
}