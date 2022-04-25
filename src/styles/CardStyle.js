import styled from 'styled-components';

const ItemsContainer = styled.details`
    width: 60vw;

    color: rgba(0, 0, 0, 0.8);
    text-align: start;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 20px;

    summary:before {
        content: "+";
        color: black;
        position: absolute;
        right: 20px;
        font-weight: 400;
        transform-origin: center;
        transition: 200ms linear;
    }

    summary {
        margin: 10px;
    }

    details {
        font-size: 15px;
        margin: 0 20px;
    }

    a {
        all: unset;
        width: fit-content;

        color: #3f61d7;
        font-size: 14px;
        
        margin: 0 30px;
        padding: 0 10px 10px;

        cursor: pointer;
    }
`;

export {
    ItemsContainer,
};
