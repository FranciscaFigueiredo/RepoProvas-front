import styled from 'styled-components';

const Form = styled.form`
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
`;

const Title = styled.h2`
    color: rgba(0, 0, 0, 0.8);
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    margin-bottom: 10px;
    padding: 0 20px;
`;

const Input = styled.input`
    width: 80vw;
    height: 55px;

    color: #000000;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;

    margin-bottom: 10px;
    padding: 0 20px;

    background-color: rgba(255, 255, 255, 0);
    border-radius: 6px;
    border: 2px solid #c4c4c4;

    outline: 0;

    &placeholder {
        color: #9f9f9f;
    }

    @media (min-width: 611px) {
        width: 30vw;
    }
`;

const ButtonSubmit = styled.button`
    width: 80vw;
    height: 55px;

    color: #ffffff;
    font-size: 22px;
    font-family: 'Oswald', sans-serif;
    line-height: 33px;

    background-color: #1976d2;

    margin-bottom: 10px;
    padding: 0 20px;

    border-radius: 6px;

    @media (min-width: 611px) {
        width: 30vw;
    }
`;

const Redirect = styled.span`
    width: 80vw;

    color: rgba(70, 115, 202, 0.8);
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    text-decoration: underline;

    margin-bottom: 10px;
    padding: 0 20px;

    border-radius: 6px;

    @media (min-width: 611px) {
        width: 30vw;
    }
`;

export { Form, Title, Input, ButtonSubmit, Redirect };
