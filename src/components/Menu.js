import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import { Button, ButtonsContainer, Line, MenuContainer, Search } from "../styles/NavigationMenuStyle";

export function Menu({ status, setStatus }) {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [search, setSearch] = useState('');
    
    const [placeText, setPlaceText] = useState('Pesquise por disciplina');
    
    useEffect(() => {
        if (status[1]) {
            setPlaceText('Pesquise por pessoa instrutora');
        }
    }, [status])
    console.log(status);

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
