import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    flex-direction: column;

    h1 {
        font-size: 40px;
        margin-bottom: 5px;
    };

    p {
        font-size: 22px;
        margin-bottom: 5px;
    };

    button {
        width: 250px;
        height: 40px;
        border-radius: 35px;
        background-color: #FFA500;
        border: 1px solid #000;
        cursor: pointer;
        font-weight: bold;

        &:hover {
            background-color: #EE9400;
        }
    }
`;
