import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

import { CardsContainer, PageContainer } from "../styles/ContainerStyle";
import { Title } from "../styles/FormStyle";

import { PerDisciplineCard } from "../components/PerDisciplineCard";
import { PerTeacherCard } from "../components/PerTeacherCard";

import { getTeachers, getTerms } from "../services/repoProvas";

export function Home() {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const token = user?.token;

    const [terms, setTerms] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [status, setStatus] = useState([true, false, false]);

    useEffect(() => {
        if (!user) {
            navigate('/');
        }

        if (status[0] && token) {
            getTerms({ token })
                .then((res) => setTerms(res.data))
                .catch((err) => console.error());
        }

        if (status[1] && token) {
            getTeachers({ token })
                .then((res) => setTeachers(res.data))
                .catch((err) => console.error());
        }
    }, [navigate, status, token, user]);

    return (
        <PageContainer>
            <Header />
            <Menu status={ status } setStatus={ setStatus } />
            <CardsContainer>
                {
                    status[0] ?
                        terms.length ?
                            terms.map((term) => <PerDisciplineCard token={ token } term={ term } />)
                        : <Title>Não há registros</Title>
                    : ''
                }

                {
                    status[1] ?
                        teachers.length ?
                            teachers.map((teacher) => <PerTeacherCard token={ token } teacher={ teacher } />)
                        : <Title>Não há registros</Title>
                    : ''
                }
            </CardsContainer>
        </PageContainer>
    );
}
