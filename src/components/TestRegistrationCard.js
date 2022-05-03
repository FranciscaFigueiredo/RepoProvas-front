import { useEffect, useState } from "react";
import { CardsContainer } from "../styles/ContainerStyle";
import { ButtonSubmit, Form, Input, SelectItem, Title } from "../styles/FormStyle";

import { getCategories, getDisciplines, getTeachersByDisciplineId, postNewTestData } from "../services/repoProvas";

export function TestRegistrationCard({ token }) {
    const [name, setName] = useState('');
    const [pdfUrl, setPdfUrl] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    const [disciplineId, setDisciplineId] = useState(null);
    const [teacherDisciplineId, setTeacherDisciplineId] = useState(null);

    const [categories, setCategories] = useState([]);
    const [disciplines, setDisciplines] = useState([]);
    const [teachers, setTeachers] = useState([]);

    const [optionsCategories, setOptionsCategories] = useState([]);
    const [optionsDisciplines, setOptionsDisciplines] = useState([]);
    const [optionsTeachers, setOptionsTeachers] = useState([]);

    const [disable, setDisable] = useState(true);

    useEffect(() => {
        getCategories({ token })
            .then((res) => setCategories(res.data))
            .catch((err) => console.error());

        getDisciplines({ token })
            .then((res) => setDisciplines(res.data))
            .catch((err) => console.error());

        if (disciplineId && !teachers.length) {
            setDisable(false);
            getTeachersByDisciplineId({ token, discipline: disciplineId})
                .then((res) => setTeachers(res.data))
                .catch((err) => console.error());
        }
    }, [disciplineId]);

    if (categories.length && !optionsCategories.length) {
        categories.map((category) => {
            optionsCategories.push({
                value: category.id,
                label: category.name,
            })
        })
    }

    if (disciplines.length && !optionsDisciplines.length) {
        disciplines.map((discipline) => {
            optionsDisciplines.push({
                value: discipline.id,
                label: discipline.name,
            })
        })
    }

    if (teachers.length && !optionsTeachers.length) {
        teachers.map((data) => {
            optionsTeachers.push({
                value: data.id,
                label: data.teacher.name,
            })
        })
    }

    function createNewTest() {
        postNewTestData({ token, test: {
            name,
            pdfUrl,
            categoryId,
            teacherDisciplineId,
        }})
            .then((res) => {
                alert('Cadastro efetuado!');
                setTimeout(() => {
                    setName('');
                    setPdfUrl('');
                    setCategoryId(null);
                    setTeacherDisciplineId(null);
                    setOptionsCategories([])
                    setOptionsDisciplines([])
                    setOptionsTeachers([])
                }, 3000)
            })
            .catch((err) => console.error());    
    }

    return (
        <CardsContainer>
            <Title>Casdastrar Novo Teste</Title>
            <Form onSubmit={createNewTest}>
                <Input
                    type="text"
                    placeholder="Nome da Prova"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <Input
                    type="url"
                    placeholder="Link da Prova"
                    required
                    value={pdfUrl}
                    onChange={(event) => setPdfUrl(event.target.value)}
                />
                <SelectItem
                    width='80vw'
                    border='2px solid #3f61d7'
                    color='rgba(63, 97, 215, 0.6);'
                    styles={SelectItem}
                    onFocus={false}
                    onChange={(event) => setCategoryId(event.value)}
                    options={optionsCategories}
                    isLoading={optionsCategories.length === 0}
                    placeholder="Categoria"
                />
                <SelectItem
                    width='80vw'
                    border='2px solid #3f61d7'
                    color='rgba(63, 97, 215, 0.6);'
                    styles={SelectItem}
                    onFocus={false}
                    onChange={(event) => setDisciplineId(event.value)}
                    options={optionsDisciplines}
                    isLoading={optionsDisciplines.length === 0}
                    placeholder="Disciplina"
                />

                <SelectItem
                    width='80vw'
                    border='2px solid #3f61d7'
                    color='rgba(63, 97, 215, 0.6);'
                    styles={SelectItem}
                    onFocus={false}
                    isDisabled={disable}
                    onChange={(event) => setTeacherDisciplineId(event.value)}
                    options={optionsTeachers}
                    isLoading={optionsTeachers.length === 0}
                    placeholder="Instrutor"
                />
                <ButtonSubmit disabled={disable} >Cadastrar</ButtonSubmit>
            </Form>
        </CardsContainer>
    );
}