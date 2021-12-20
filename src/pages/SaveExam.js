import { useEffect, useState } from "react";
import { postExam } from "../services/repoProvas";
import { ButtonPage } from "../styles/ButtonStyle";
import { Input } from "../styles/InputStyle";

export default function SaveExam() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [teacher, setTeacher] = useState('');
    const [category, setCategory] = useState('');
    const [subject, setSubject] = useState('');

    const [examData, setExamData] = useState('');

    useEffect(() => {
        setExamData({
            name,
            link,
            teacher,
            category,
            subject,
        })
    }, [name, link, teacher, category, subject])
    
    function sendExam(event) {
        event.preventDefault();
        postExam(examData)
    }

    return (
        <div>
            <h1>Cadastre sua prova aqui!</h1>
            <form onSubmit={sendExam}>
                <Input type='text' placeholder='nome' onChange={(event) => setName(event)} />
                <Input type='text' placeholder='link' onChange={(event) => setLink(event)} />
                <Input type='text' placeholder='professor' onChange={(event) => setTeacher(event)} />
                <Input type='text' placeholder='categoria' onChange={(event) => setCategory(event)} />
                <Input type='text' placeholder='disciplina' onChange={(event) => setSubject(event)} />
                <ButtonPage type='submit'>Enviar</ButtonPage>
            </form>
        </div>
    );
}
