import styled from "styled-components";

const ContainerPage = styled.div`
    max-width: 95vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    overflow: 0;

    form {
        text-align: center;
        margin: 20px auto 0;
    }

    a {
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
    }
`;

export {
    ContainerPage,
}
