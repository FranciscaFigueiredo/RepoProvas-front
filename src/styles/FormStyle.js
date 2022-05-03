import styled from 'styled-components';

import Select from 'react-select';

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

    color: rgba(63, 97, 215, 1);
    font-size: 22px;
    font-family: 'Poppins', sans-serif;

    margin-bottom: 10px;
    padding: 0 20px;

    background-color: rgba(255, 255, 255, 0);
    border-radius: 6px;
    border: 2px solid #3f61d7;

    outline: 0;

    &::placeholder {
        color: rgba(63, 97, 215, 0.6);
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

const SelectItem = styled(Select)`
    width: 80vw;

    color: rgba(63, 97, 215, 1);
    font-size: 22px;
    font-family: 'Poppins', sans-serif;

    margin-bottom: 10px;

    background-color: rgba(255, 255, 255, 0);
    border-radius: 6px;
    border: 2px solid #3f61d7;

    outline: 0;

    .css-14el2xx-placeholder {
        color: rgba(63, 97, 215, 0.6);
        text-align: left;

        padding-left: 7px;
    }


    .css-1okebmr-indicatorSeparator {
        background-color: rgba(63, 97, 215, 0.6);
    }

    .css-tj5bde-Svg {
        color: rgba(63, 97, 215, 0.6);
    }

    @media (min-width: 611px) {
        width: 30vw;
    }
`;

export { Form, Title, Input, ButtonSubmit, Redirect, SelectItem };
