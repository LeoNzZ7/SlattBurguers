import styled from "styled-components";
import burgue from '../../assets/burgue.jpeg'

export const Home = styled.div`
    background-image: url(${burgue});
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow-x: hidden;
`;

export const homeArea = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const Header = styled.div`
    height: 75px;
    width: 100vw;
`;

export const HomeInfo = styled.div`
    height: 100vh;
    padding-top: 175px;
    padding-left: 25px;

    h1 {
        color: #FFA500;
    };

    h4 {
        color: #FFF;
        margin-bottom: 15px;
    }

    button {
        background-color: #FFA500;
        font-weight: bold;
        width: 300px;
        height: 50px;
        border-radius: 30px;
        cursor: pointer;

        &:hover {
            background-color: #EE9400;
        } 
    }
`;