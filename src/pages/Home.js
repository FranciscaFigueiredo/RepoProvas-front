import { Link } from "react-router-dom"
import { ButtonHome } from "../styles/ButtonStyle";
import { ContainerPage } from "../styles/ContainerStyle";

export default function Home() {
    
    return (
        <ContainerPage>
            <Link to='/post'>
                <ButtonHome>Cadastrar Prova</ButtonHome>
            </Link>
            <ButtonHome>Cadastrar Prova</ButtonHome>
            <ButtonHome>Buscar Provas</ButtonHome>
            <ButtonHome>Buscar Professores</ButtonHome>
            <ButtonHome>Buscar Disciplinas</ButtonHome>
        </ContainerPage>
    );
}
