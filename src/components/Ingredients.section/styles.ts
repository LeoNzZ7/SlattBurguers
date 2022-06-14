import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    border-top: 3px solid #FFA500;
`;

export const imageArea = styled.div`
    height: 100%;
    width: 600px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: auto;
        height: 95%;
    };
`;

export const infoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #000;
    flex: 2;
    font-weight: bold;
    height: 100%;
    flex-direction: column;

    h1 {
        color: #FFA500;
    };

    ul {
        width: 80%;
    };

    li {
        padding: 10px 0px;
        color: #FFF;
    };

    button {
        width: 300px;
        height: 50px;
        background-color: #FFA500;
        border-radius: 30px;
        cursor:pointer;
        font-weight: bold;

        &:hover {
            background-color: #EE9400;
        };
    };
`;