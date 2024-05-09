import { BoxEditor } from "../components/editor/Editor";
import { MenuBarCustomTopic } from "../components/MenuTopic";

export function DataStructures() {
    const topicBlock = [
        'Arrays',
        'Listas Enlazadas',
        'Listas Circulares',
        'Listas doblemente enlazadas',
        'Stacks',
        'Queues',
        'Trees',
        'Grafos',
        'Hash'
    ]
    
    return (
        <>
        <section>
            <div className="flex justify-center pb-20">
                <h4 className="font-bold text-7xl">Estructura de Datos</h4>
            </div>
            <div className="pb-10">
                {/*<MenuBarCustomTopic block={topicBlock}/>*/}
            </div>
            <div className="w-full">
                {/*<BoxEditor />*/}
            </div>
        </section>
        </>
    );
}