import { useState } from "react";
import { getTestsByDisciplineTermNumber, postIncrementNumberOfViews } from "../services/repoProvas";
import { ItemsContainer } from "../styles/CardStyle";
import { Test } from "./Test";

export function DisciplineDetails({ token, term, discipline }) {
    const [tests, setTests] = useState([]);

    function getTestsByDisciplineAndTerm() {
        getTestsByDisciplineTermNumber({ token, term: term.number, discipline: discipline.id })
            .then((res) => setTests(res.data))
            .catch((err) => console.error());
    }

    return (
        <ItemsContainer onClick={ getTestsByDisciplineAndTerm } >
            <summary>{ discipline.name }</summary>
            {
                tests ?
                    tests.map((test, index) => <Test key={index} token={ token } test={ test } />)
                : ''
            }
        </ItemsContainer>
    );
}