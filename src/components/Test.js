import { useEffect, useState } from "react";
import { incrementNumberOfViews } from "../services/repoProvas";
import { LinkTest, TestContainer, Views } from "../styles/TestStyle";

export function Test({ token, test }) {
    const [views, setViews] = useState(test.views);
    
    const {
        id,
        name,
        pdfUrl,
        teacherDiscipline,
    } = test;

    function incrementViews() {
        incrementNumberOfViews({ token, test: id })
            .then((res) => {
                setViews(res.data.views);
                window.open(pdfUrl, '_blank')
            })
            .catch((err) => console.error());
    }

    useEffect(() => {}, [views]);

    return (
        <TestContainer onClick={incrementViews}>
            <LinkTest target='_blank' rel='noopener noreferrer' >{ name }  ({teacherDiscipline.teacher.name}) 
                <Views> - { views } visualizações</Views>
            </LinkTest>
        </TestContainer>
    );
}