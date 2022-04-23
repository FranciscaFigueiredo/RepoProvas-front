import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
                // setMessage('Cadastro realizado com sucesso!');
                // setModalSuccess(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch((err) => {
                console.error();

                setPassword('');
                setDisable(false);

                if (err.response.status === 422) {
                    // setMessage('Digite dados válidos');
                    // setIsModalOpen(true);
                }

                if (err.response.status === 409) {
                    setEmail('');
                    setName('');
                    // setMessage(err.response.data);
                    // setIsModalOpen(true);
                }

                if (err.response.status === 500) {
                    // setMessage(
                    //     'Servidor fora de área, tente novamente mais tarde'
                    // );
                    // setIsModalOpen(true);
                }
            });
    }

    return (
        <PageContainer>
            <Title>Cadastro</Title>
            <Form onSubmit={console.log('oioioi')}>
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
                    placeholder="e-mail"
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

                <ButtonSubmit disabled={disable}>Sign Up</ButtonSubmit>
                <Link to="/">
                    <Redirect>Switch back to log in</Redirect>
                </Link>
            </Form>

            {/* {isModalOpen ? (
                <ModalError
                    message={message}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            ) : (
                ''
            )}

            {modalSuccess ? <ModalSuccess message={message} /> : ''} */}
        </PageContainer>
    );
}
