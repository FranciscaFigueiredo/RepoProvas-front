import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PerTermCard } from "../components/PerTermCard";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import UserContext from "../contexts/UserContext";
import { getTerms } from "../services/repoProvas";
import { CardsContainer, PageContainer } from "../styles/ContainerStyle";

export function Home() {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const token = user?.token;

    const [terms, setTerms] = useState([]);
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
    }, []);

    return (
        <PageContainer>
            <Header />
            <Menu status={ status } setStatus={ setStatus } />
            <CardsContainer>
                {
                    status[0] && terms.length ?
                        terms.map((term) => <PerTermCard token={ token } term={ term } />)
                    : ''
                }

                {
                    status[1] && terms.length ?
                        terms.map((term) => <input />)
                    : ''
                }
            </CardsContainer>
        </PageContainer>
    );
}
