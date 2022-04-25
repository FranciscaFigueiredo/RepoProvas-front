import { useState } from "react";
import { getTestsByDisciplineTermNumber } from "../services/repoProvas";
import { ItemsContainer } from "../styles/CardStyle";

export function DisciplineDetails({ token, term, discipline }) {
    const [tests, setTests] = useState([]);

    function getTestsByDisciplineAndTerm() {
        getTestsByDisciplineTermNumber({ token, term: term.number, discipline: discipline.id })
            .then((res) => setTests(res.data))
            .catch((err) => console.error());
    }

    console.log(tests);
    return (
        <ItemsContainer onClick={ getTestsByDisciplineAndTerm } >
            <summary>{ discipline.name }</summary>
            {
                tests ?
                    tests.map((test) => <a href={test.pdfUrl} target='_blank' >{ test.name }</a>)
                : ''
            }
        </ItemsContainer>
    );
}