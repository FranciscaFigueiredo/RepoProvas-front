import { useEffect, useState } from "react";

import { Button, ButtonsContainer, Line, MenuContainer, Search } from "../styles/NavigationMenuStyle";

export function Menu({ status, setStatus }) {
    const [search, setSearch] = useState('');
    
    const [placeText, setPlaceText] = useState('Pesquise por disciplina');
    
    useEffect(() => {
        if (status[1]) {
            setPlaceText('Pesquise por pessoa instrutora');
        }
    }, [status]);

    return (
        <MenuContainer>
            <Search
                type="text"
                placeholder={ placeText }
                required
                value={ search }
                onChange={(event) => setSearch(event.target.value)}
            />
            <Line />
            <ButtonsContainer>
                <Button status={ status[0] } onClick= { () => setStatus([true, false, false])} >DISCIPLINAS</Button>
                <Button status={ status[1] } onClick= { () => setStatus([false, true, false])} >PESSOA INSTRUTORA</Button>
                <Button status={ status[2] } onClick= { () => setStatus([false, false, true])} >ADICIONAR</Button>
            </ButtonsContainer>
        </MenuContainer>
    );
}
