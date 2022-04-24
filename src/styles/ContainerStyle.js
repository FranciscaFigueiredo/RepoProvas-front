import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;

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

export {
    PageContainer,
    HeaderContainer,
};
