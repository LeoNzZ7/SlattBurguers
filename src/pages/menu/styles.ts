import styled from "styled-components";

export const Container = styled.div`
    background-color: #000;
    padding-bottom: 50px;
    overflow: hidden;
    text-align: center;

    h1 {
        color: #FFF;
        margin: 50px 0px;
    };
`;

export const Header = styled.div`
    height: 75px;
    width: 100vw;
    background-color: #FFA500;
    border-bottom: 3px solid #333;

    h1, .icon {
        color: #000;
    };

    ul {
        li {
            a {
                color: #000;
                border-bottom: 3px solid #FFA500;
                
                &:hover {
                    border-bottom: 3px solid #000;
                    color: #222;
                };
            };
        };
    };
`;

export const MenuArea = styled.div`
    width: 90%;
    flex-wrap: wrap;
    margin: auto;
    border: 1px solid #FFF;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    align-items: end;
    justify-content: space-evenly;
`;

export const MenuItem = styled.div`
    width: 30%;
    height: 350px;
    display: flex;
    justify-content: space-evenly;
    margin: 50px 0px;
    border: 1px solid #FFF;
    border-radius: 25px;
    flex-direction: column;
    align-items: center;

    h1 {
        padding: 0px;
        margin: 0px;
        color: #FFA500;
    };

    h3 {
        color: #FFF;
    };

    .image {
        background-color: #FFA500;
        width: 150px;
        height: 150px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #FFF;

        img {
            width: 75%;
            height: 75%;
        };
    };

    button {
        width: 200px;
        height: 40px;
        background-color: #FFA500;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;

        &:hover {
            background-color: #EE9400;
        };
    };
`;