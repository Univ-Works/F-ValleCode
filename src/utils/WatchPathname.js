import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function KnowTopicProblem() {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/poo':
                localStorage.setItem('topicProblem', 'oop');
                break;
            case '/datastructures':
                localStorage.setItem('topicProblem', 'ds');
                break;
            default:
                localStorage.removeItem('topicProblem');
                break;
        }
    }, [location]);
}