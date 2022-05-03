import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

import { CardsContainer, PageContainer } from "../styles/ContainerStyle";
import { Title } from "../styles/FormStyle";

import { PerDisciplineCard } from "../components/PerDisciplineCard";
import { PerTeacherCard } from "../components/PerTeacherCard";
import { TestRegistrationCard } from "../components/TestRegistrationCard"

import { getTeachers, getTeachersByName, getTerms, getTermsByDisciplineName } from "../services/repoProvas";
import { ToastContainer } from "react-toastify";

export function Home() {
    const navigate = useNavigate();

    const user = JSON.parse(`${sessionStorage.getItem('user')}`);
    const { token } = user;

    const [search, setSearch] = useState('');

    const [terms, setTerms] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [status, setStatus] = useState([true, false, false]);

    if (!token) {
        navigate('/');
    }
    
    useEffect(() => {
        if (status[0] && token && search.length < 3) {
            getTerms({ token })
                .then((res) => setTerms(res.data))
                .catch((err) => console.error());
        }

        if (status[1] && token && !search && search.length < 3) {
            getTeachers({ token })
                .then((res) => setTeachers(res.data))
                .catch((err) => console.error());
        }

        if (search.length > 2 && status[0]) {
            getTermsByDisciplineName({ token, discipline: search })
                .then((res) => setTerms(res.data))
                .catch((err) => console.error());
        }
    
    
        if (search.length > 2 && status[1]) {
            getTeachersByName({ token, name: search })
                .then((res) => setTeachers(res.data))
                .catch((err) => console.error());
        }
    }, [status, token, search]);

    return (
        <PageContainer>
            <Header />
            <Menu status={ status } setStatus={ setStatus } search={ search } setSearch={ setSearch } />
            <CardsContainer>
                {
                    status[0] ?
                        terms.length ?
                            terms.map((term, index) => term.discipline.length ? <PerDisciplineCard key={ index } token={ token } search={ search } term={ term } /> : '')
                        : <Title>Não há registros</Title>
                    : ''
                }

                {
                    status[1] ?
                        teachers.length ?
                            teachers.map((teacher, index) => <PerTeacherCard key={ index } token={ token } teacher={ teacher } />)
                        : <Title>Não há registros</Title>
                    : ''
                }

                {
                    status[2] ?
                        <TestRegistrationCard token={ token } />
                    : ''
                }
            </CardsContainer>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </PageContainer>
    );
}
