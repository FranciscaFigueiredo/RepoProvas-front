import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100vw;
    min-height: 70vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    position: relative;
`;

const HeaderContainer = styled.div`
    width: 100vw;
    min-height: 150px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    padding: 0 30px;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
`;

const CardsContainer = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    position: relative;
`;

const CardContainer = styled.div`
    width: 70vw;
    min-height: 55px;

    text-align: start;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #3f61d7;

    margin: 5px auto;

    position: relative;
`;

export {
    PageContainer,
    HeaderContainer,
    CardsContainer,
    CardContainer,
};
