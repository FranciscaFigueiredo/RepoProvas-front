import { Link } from "react-router-dom"
import { ButtonHome } from "../styles/ButtonStyle";
import { ContainerPage } from "../styles/ContainerStyle";

export default function Home() {
    
    return (
        <ContainerPage>
            <Link to='/post'>
                <ButtonHome>Cadastrar Prova</ButtonHome>
            </Link>
            <Link to='/exams'>
                <ButtonHome>Buscar Provas</ButtonHome>
            </Link>
            <Link to='/teachers'>
                <ButtonHome>Buscar Professores</ButtonHome>
            </Link>
            <Link to='/subjects'>
                <ButtonHome>Buscar Disciplinas</ButtonHome>
            </Link>
        </ContainerPage>
    );
}
