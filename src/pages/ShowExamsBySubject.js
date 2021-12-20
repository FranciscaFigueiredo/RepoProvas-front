import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExamsList from "../components/ExamsList";
import { getExamsBySubject } from "../services/repoProvas";
import { ContainerPage } from "../styles/ContainerStyle";

export default function ShowExamsBySubject() {
    const { id } = useParams();
    const [examsData, setExamsData] = useState([]);

    useEffect(() => {
        getExamsBySubject(id).then((res) => setExamsData(res.data)).catch((err) => console.error())
    }, [id])
    console.log({id, examsData})
    
    return (
        <ContainerPage>
            
            {
                !examsData.length ? 
                    <h2>Não há provas cadastradas</h2>
                :
                    examsData.map((exam, index) => <ExamsList key={index} name={ exam.name } link={ exam.link } />)
            }
            
        </ContainerPage>
    );
}