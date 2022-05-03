import { useState } from "react";
import { getTestsByTeacherAndCategoryIds } from "../services/repoProvas";
import { ItemsContainer } from "../styles/CardStyle";

export function CategoryDetails({ token, teacher, category }) {
    const [tests, setTests] = useState([]);

    function getTestsByTeacherAndCategory() {
        getTestsByTeacherAndCategoryIds({ token, teacher: teacher.id, category: category.id })
            .then((res) => setTests(res.data))
            .catch((err) => console.error());
    }

    return (
        <ItemsContainer onClick={ getTestsByTeacherAndCategory } >
            <summary>{ category.name }</summary>
            {
                tests ?
                    tests.map((test) => <a href={test.pdfUrl} target='_blank' rel='noreferrer' >{ test.name } ({test.teacherDiscipline.discipline.name})</a>)
                : ''
            }
        </ItemsContainer>
    );
}