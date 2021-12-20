import { useEffect, useState } from "react";
import TeacherList from "../components/TeacherList";
import { getTeachers } from "../services/repoProvas";
import { ContainerPage } from "../styles/ContainerStyle";

export default function ShowTeachers() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        getTeachers().then((res) => setTeachers(res.data)).catch((err) => console.error())
    }, [])
    console.log(teachers)
    
    return (
        <ContainerPage>
            
            {
                !teachers.length ? 
                    <h2>Não há professores cadastrados</h2>
                :
                    teachers.map((teacher, index) => <TeacherList key={index} id={ teacher.id } name={ teacher.name } link={ teacher.link } />)
            }
            
        </ContainerPage>
    );
}
