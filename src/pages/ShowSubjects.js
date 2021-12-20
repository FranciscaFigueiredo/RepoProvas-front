import { useEffect, useState } from "react";
import SubjectList from "../components/SubjectList";
import { getSubjects } from "../services/repoProvas";
import { ContainerPage } from "../styles/ContainerStyle";

export default function ShowSubjects() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        getSubjects().then((res) => setSubjects(res.data)).catch((err) => console.error())
    }, [])
    console.log(subjects)
    
    return (
        <ContainerPage>
            
            {
                !subjects.length ? 
                    <h2>Não há professores cadastrados</h2>
                :
                    subjects.map((subject, index) => <SubjectList key={index} id={ subject.id } name={ subject.name } link={ subject.link } />)
            }
            
        </ContainerPage>
    );
}
