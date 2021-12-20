import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExamsList from "../components/ExamsList";
import { getExamsByTeacher } from "../services/repoProvas";
import { ContainerPage } from "../styles/ContainerStyle";

export default function ShowExamsByTeacher() {
    const { id } = useParams();
    const [examsData, setExamsData] = useState([]);

    useEffect(() => {
        getExamsByTeacher(id).then((res) => setExamsData(res.data)).catch((err) => console.error())
    }, [id])
    
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