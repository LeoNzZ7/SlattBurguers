import styled from "styled-components";

export const FormPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;

export const RegisterArea = styled.div<{formType: string}>`
    background-color: ${props => props.formType === 'login' ? '#FFA500' : '#FFF'};
    width: ${props => props.formType === 'login' ? '60%' : '40%'};
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    };

    label {
        display: flex;
        width: 80%;

        input {
            width: 100%;
            height: 35px;
            outline: 0;
            background-color: #EEE;
            border: 0;
            margin: 5px 0px;
            padding: 5px 10px;
            border-radius: 0px 20px 20px 0px;
        };

        .icon {
            background-color: #EEE;
            margin: 5px 0px;
            padding: 5px 0px;
            padding-left: 5px;
            border-radius: 20px 0px 0px 20px;
        };
    };

    .inputName {
        display: flex;
        width: 80%;
        justify-content: center;

        label {
            width: 100%;

            input {
                width: 80%;
            };

            &:last-child {
                display: flex;
                justify-content: end;
            };
        };
    };

    .button {
        height: 40px;
        width: 45%;
        border: 0;
        background-color: #FFA500;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        margin: 5px 0px;

        &:hover {
            background-color: #EE9400;
        };
    };
`;

export const LoginArea = styled.div<{formType: string}>`
    background-color: ${props => props.formType === 'login' ? '#FFF' : '#FFA500'};
    width: ${props => props.formType === 'login' ? '40%' : '60%'};
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    };

    label {
        display: flex;
        width: 80%;

        input {
            width: 100%;
            height: 35px;
            outline: 0;
            background-color: #EEE;
            border: 0;
            margin: 5px 0px;
            padding: 5px 10px;
            border-radius: 0px 20px 20px 0px;
        };

        .icon {
            background-color: #EEE;
            margin: 5px 0px;
            padding: 5px 0px;
            padding-left: 5px;
            border-radius: 20px 0px 0px 20px;
        };
    };

    .button {
        height: 40px;
        width: 45%;
        border: 0;
        background-color: #FFA500;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        margin: 5px 0px;

        &:hover {
            background-color: #EE9400;
        };
    };
`;

export const ChangeFormType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    h1 {
        font-size: 37px;
    };

    p {
        font-size: 20px;
    };

    button {
        height: 40px;
        width: 30%;
        border: 0;
        background-color: #FFA500;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        margin: 5px 0px;
        border: 1px solid #000; 

        &:hover {
            background-color: #EE9400;
        }
    };
`;