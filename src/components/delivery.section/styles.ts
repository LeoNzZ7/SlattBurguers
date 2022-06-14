import styled from "styled-components";
import moto from '../../assets/Moto.jpg';

export const Container = styled.div`
    height: 100vh;
    background-color: #000;
    border-top: 3px solid #FFA500;
    display: flex;
    max-width: 100vw;
`;

export const Image = styled.div`
    width: 45%;
    background-size: cover;
    background-position: center;
    border-left: 3px solid #FFA500;
    background-image url('${moto}');
`;  

export const DeliveryInfo = styled.div`
    width: 55%;
    display: flex;
    justify-content: center;

    h1, h3 {
        color: #FFA500;
        padding: 30px 0px;
    };
`;