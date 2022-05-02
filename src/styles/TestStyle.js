import styled from 'styled-components';

const TestContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 10px;
`;

const LinkTest = styled.a`
    all: unset;

    width: fit-content;

    color: #3f61d7;
    font-size: 14px;
    
    margin: 0 30px;
    padding: 0 10px 10px;

    cursor: pointer;
`;


const Views = styled.span`
    font-size: 12px;

    color: rgba(0, 0, 0, 0.6);
`;

export {
    TestContainer,
    LinkTest,
    Views,
};