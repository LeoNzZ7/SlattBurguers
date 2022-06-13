import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    border-top: 3px solid #FFA500;
`;

export const imageArea = styled.div`
    height: 100vh;
    width: 600px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: auto;
        height: 100%;
    };
`;

export const infoArea = styled.div`
    display: flex;
    align-items: center;
    background-color: #000;
    padding-top: 50px;
    flex: 2;
    font-weight: bold;
    height: 100vh;
    flex-direction: column;

    h1 {
        color: #FFA500;
    }

    ul {
        width: 80%;
        padding: 35px 0px;
    }

    li {
        padding: 15px 0px;
        color: #FFF;
`;