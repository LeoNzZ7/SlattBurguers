import styled from "styled-components";
import burgue from './assets/burgue.jpeg'

export const Home = styled.div`
    background-image: url(${burgue});
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow: hidden;
`;

export const homeArea = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const Header = styled.div`
    height: 75px;
    width: 100vw;
    position: fixed;
    top: 0px;
    left: 0px;
`;