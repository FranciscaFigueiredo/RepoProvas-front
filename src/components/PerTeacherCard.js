import { useState } from "react";
import { getCategoriesByTeacherId } from "../services/repoProvas";
import { ItemsContainer } from "../styles/CardStyle";
import { CardContainer } from "../styles/ContainerStyle";
import { CategoryDetails } from "./CategoryDetails";

export function PerTeacherCard({ token, teacher }) {    
    const [categories, setCategories] = useState([]);

    function getDisciplinesByTerm() {
        getCategoriesByTeacherId({ token, teacher: teacher.id })
            .then((res) => setCategories(res.data))
            .catch((err) => console.error());
    }

    return (
        <CardContainer>
            <ItemsContainer onClick={ getDisciplinesByTerm } >
                <summary>{ teacher.name }</summary>
                {
                    categories ?
                        categories.map((category) => <CategoryDetails token={ token } teacher={ teacher } category={ category.category } />)
                    : ''
                }
            </ItemsContainer>
        </CardContainer>
    );
}
