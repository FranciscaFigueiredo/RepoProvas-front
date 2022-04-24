import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { postSignUp } from '../services/repoProvas';

import { PageContainer } from '../styles/ContainerStyle';
import {
    ButtonSubmit,
    Form,
    Input,
    Redirect,
    Title,
} from '../styles/FormStyle';

export default function SignUp() {
    const navigate = useNavigate();

    const [disable, setDisable] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function signup(event) {
        event.preventDefault();
        setDisable(true);

        postSignUp({
            name,
            email,
            password,
        })
            .then((res) => {
                alert('Cadastro realizado com sucesso!');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch((err) => {
                console.error();

                setPassword('');
                setDisable(false);

                if (err.response.status === 400) {
                    console.log(err.response.status);

                    alert('Digite dados válidos!');
                }

                if (err.response.status === 409) {
                    setEmail('');
                    setName('');
                    alert('Usuário já existente');
                }

                if (err.response.status === 500) {
                    alert('Servidor fora de área, tente novamente mais tarde');
                }
            });
    }

    return (
        <PageContainer>
            <Header />
            <Title>Sign Up</Title>
            <Form onSubmit={signup}>
                <Input
                    type="text"
                    placeholder="name"
                    disabled={disable}
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
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

                <ButtonSubmit disabled={disable}>Cadastrar</ButtonSubmit>
                <Link to="/">
                    <Redirect>Switch back to log in</Redirect>
                </Link>
            </Form>
        </PageContainer>
    );
}
