import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { postLogin } from '../services/repoProvas';

import { PageContainer } from '../styles/ContainerStyle';
import {
    ButtonSubmit,
    Form,
    Input,
    Redirect,
    Title,
} from '../styles/FormStyle';

export default function Login({ user, setUser, setToken }) {
    const navigate = useNavigate();

    const [disable, setDisable] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (user) {
        navigate('/home');
    }

    function redirectLogin(res) {
        setToken(res.data.token);

        const user = JSON.stringify(res.data);
        sessionStorage.setItem('user', user);
        setUser(user);

        setTimeout(() => {
            navigate('/home');
        }, 100);
    }

    function login(event) {
        event.preventDefault();
        setDisable(true);

        postLogin({
            email,
            password,
        })
            .then((res) => {
                alert('Login com sucesso!');
                redirectLogin(res);
            })
            .catch((err) => {
                console.error();

                setPassword('');
                setDisable(false);

                if (err.response.status === 400) {
                    alert('Digite dados válidos');
                }

                if (err.response.status === 401) {
                    setEmail('');
                    alert(err.response.data);
                }

                if (err.response.status === 500) {
                    alert(
                        'Servidor fora de área, tente novamente mais tarde'
                    );

                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                }
            });
    }

    return (
        <PageContainer>
            <Header />
            <Title>Login</Title>
            <Form onSubmit={login}>
                <Input
                    type="email"
                    placeholder="email"
                    disabled={disable}
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    type="password"
                    placeholder="password"
                    disabled={disable}
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <ButtonSubmit disabled={disable}>Entrar</ButtonSubmit>
                <Link to="/sign-up">
                    <Redirect>First time? Create an account!</Redirect>
                </Link>
            </Form>
        </PageContainer>
    );
}