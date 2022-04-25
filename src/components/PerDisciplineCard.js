import { useState } from "react";
import { getDisciplinesByTermNumber } from "../services/repoProvas";
import { ItemsContainer } from "../styles/CardStyle";
import { CardContainer } from "../styles/ContainerStyle";
import { DisciplineDetails } from "./DisciplineDetails";

export function PerDisciplineCard({ token, term }) {    
    const [disciplines, setDisciplines] = useState([]);

    function getDisciplinesByTerm() {
        getDisciplinesByTermNumber({ token, term: term.number })
            .then((res) => setDisciplines(res.data))
            .catch((err) => console.error());
    }

    return (
        <CardContainer>
            <ItemsContainer onClick={ getDisciplinesByTerm } >
                <summary>{ term.number } Período</summary>
                {
                    disciplines ?
                        disciplines.map((discipline) => <DisciplineDetails token={ token } term={ term } discipline={ discipline } />)
                    : ''
                }
            </ItemsContainer>
        </CardContainer>
    );
}
