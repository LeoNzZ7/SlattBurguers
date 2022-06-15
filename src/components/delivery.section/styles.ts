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
    width: 50%;
    background-size: cover;
    background-position: center;
    border-left: 3px solid #FFA500;
    background-image url('${moto}');
`;  

export const DeliveryInfo = styled.div`
    width: 50%;
    display: flex; 
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    h1, h3 {
        color: #FFA500;
        padding: 30px 0px;
    };

    P {
        line-height: 30px;
        font-weight: bold;
        width: 500px;
        color: #FFF;

        &:last-child {
            font-size: 14px;
            padding-top: 5px;
        };
    };

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 75%;
        height: 75%;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;

        .icon {
            background-color: transparent;
            margin: 5px 0px;
            padding: 5px 0px;
            padding-left: 5px;
            color: #FFF;
            margin-right: -40px;
        };

        label {
            display: flex;
            margin: 5px 0px;
            
            input {
                background-color: transparent;
                width: 100%;
                height: 40px;
                margin: 5px 0px;
                padding: 0px 40px;
                outline: 0;
                color: #FFF;
                border: 2px solid #FFF;
                border-radius: 20px;

                &::placeholder {
                    color: #FFF;
                };

                &:focus {
                    border: 2px solid #FFA500;
                };
            };
        };

        button {
            width: 75%;
            background-color: #FFA500;
            height: 40px;
            border-radius: 25px;
            margin: auto;
            cursor: pointer;
            font-weight: bold;

            &:hover {
                background-color: #EE9400;
            };
        };
    };
`;