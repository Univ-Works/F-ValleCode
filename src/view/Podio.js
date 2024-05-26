import { HeaderPrivate } from "../components/header/Header";
import { Core } from "./sections/podio/Core";
import { TopPodio } from "./sections/podio/TopPodio";
import { PaginationPodio } from "./sections/podio/Pagination";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export function Podio() {
    const [usersRank, setUsersRank] = useState([]);
    const [startsIndex, setStartsIndex] = useState(3);
    const [endIndex, setEndIndex] = useState(13);
    var temp_array = [];

    function prevPagination() {
        setStartsIndex(startsIndex - 10);
        setEndIndex(endIndex - 10)
    }

    function pagItem(e) {
        switch (e.target.id) {
            case 'pagitem-1':
                setStartsIndex(3);
                setEndIndex(13);
                break;
            case 'pagitem-2':
                setStartsIndex(13);
                setEndIndex(23);
                break;
            case 'pagitem-3':
                setStartsIndex(23);
                setEndIndex(33);
                break;
            case 'pagitem-4':
                setStartsIndex(33);
                setEndIndex(43);
                break;
            case 'pagitem-5':
                setStartsIndex(43);
                setEndIndex(53);
                break;
            default:
                console.log('Item not found');
        }
    }

    function nextPagination() {
        setStartsIndex(startsIndex + 10);
        setEndIndex(endIndex + 10);
    }

    async function positions() {
        let token = Cookies.get('token');
        const response = await fetch('http://localhost:8080/q/rankingpositions', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.text();
            let remove = data.split(',');
            for (let d of remove) {
                let username = d.split('-')[0];
                let points = d.split('-')[1];
                temp_array.push([username, points]);
            }
            setUsersRank(temp_array);
        }
    }

    useEffect(() => {
        positions();
    }, []);

    return (
        <>
            <HeaderPrivate />
            <main className="grid grid-cols-1 min-h-sm items-center justify-center p-20">
                <TopPodio
                    pointst={usersRank.length > 1 ? usersRank[0][1] : ''}
                    st={usersRank.length > 1 ? usersRank[0][0] : ''}
                    pointnd={usersRank.length > 1 ? usersRank[1][1] : ''}
                    nd={usersRank.length > 1 ? usersRank[1][0] : ''}
                    pointrd={usersRank.length > 1 ? usersRank[2][1] : ''}
                    rd={usersRank.length > 1 ? usersRank[2][0] : ''} />
                <Core
                    lastUsersRank={usersRank}
                    startsIndex={startsIndex}
                    endIndex={endIndex} />
                <PaginationPodio
                    endIndex={endIndex}
                    prev={prevPagination}
                    next={nextPagination}
                    onClick={pagItem} />
            </main>
        </>
    );
}