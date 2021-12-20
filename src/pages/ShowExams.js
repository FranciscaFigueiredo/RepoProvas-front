import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamsList from "../components/ExamsList";
import { getExams } from "../services/repoProvas";
import { ButtonHome } from "../styles/ButtonStyle";
import { ContainerPage } from "../styles/ContainerStyle";

export default function ShowExams() {
    const [examsData, setExamsData] = useState([]);

    useEffect(() => {
        getExams().then((res) => setExamsData(res.data)).catch((err) => console.error())
    }, [])
    console.log(examsData)
    
    return (
        <ContainerPage>
            
            {
                !examsData.length ? 
                    <h2>Não há provas cadastradas</h2>
                :
                    <>
                        <Link to='/teachers'>
                            <ButtonHome>Filtrar por professores</ButtonHome>
                        </Link>

                        <Link to='/subjects'>
                            <ButtonHome>Filtrar por disciplinas</ButtonHome>
                        </Link>
                        {examsData.map((exam, index) => <ExamsList key={index} name={ exam.name } link={ exam.link } />)}
                    </>
            }
            
        </ContainerPage>
    );
}
