import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 170px auto 30px;

    position: relative;
`;

const Search = styled.input`
    width: 25vw;
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
`;


const Line = styled.div`
    width: 100vw;
    height: 1px;

    border: 1px solid #3f61d7;

    margin: 30px 0;
`;

const Button = styled.button`
    all: unset;

    height: 40px;

    color: ${(props) => props.status ? '#ffffff' : '#1976D2'};
    font-family: 'Roboto', sans-serif;
    
    background-color: ${(props) => props.status ? '#1976D2' : '#ffffff'};
    border-radius: 4px;
    border: 1px solid rgba(25, 118, 210, 0.6);
    box-sizing: border-box;
    
    padding: 10px;
`;

const ButtonsContainer = styled.div`
    width: 70vw;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 0 auto;

    position: relative;
`;

export {
    MenuContainer,
    Search,
    Line,
    Button,
    ButtonsContainer,
};