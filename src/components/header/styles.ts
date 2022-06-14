import styled from "styled-components";

export const Container = styled.div`
    width: 1080px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    color: #fff;
`;

export const TitleArea = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    color: #FFA500;
    
    h1 {
        font-size: 35px;
    };
`;

export const MenuArea = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    ul {
        display: flex;
        list-style: none;
    
        li {
            padding: 0px 10px;
            font-size: 20px;
        
            a {
                color: #FFF;
                text-decoration: none;
                font-weight: bold;
                border-bottom: 3px solid transparent;

                &:hover {
                    border-bottom: 3px solid #FFA500;
                };
            };
        };  
    };
`;

export const acountArea = styled.div`
    display: flex;
    align-items: center;

    button {
        background-color: transparent;
        border: 0;
        color: #FFF;

        .icon {
        margin: 0px 10px;
        cursor: pointer;
        };
    };

    .cart-menu {
        width: 600px;
        background-color: rgba(20, 20, 20, 0.5);
        position: absolute;
        top: 60px;
        right: 50px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        color: #FFF;
        font-weight: bold;
        justify-content: start;
        font-size: 20px;
        border: 3px solid #222;
        padding: 10px;

        table {
            tr {
                border: 2px solid #222;
                border-radius: 10px;

                td {
                    padding: 10px 25px;
                    width: 20%;
                };
            };
        };
    };

    .account-menu {
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 60px;
        right: 40px;
        display: flex;
        flex-direction: column;
        color: #FFF;
        font-weight: bold;
        width: 180px;
        justify-content: start;
        font-size: 20px;
        border-radius: 10px;

        a {
            text-decoration: none;
            color: #FFF;
            padding: 10px;
           
            &:first-child {
                border-radius: 10px 10px 0px 0px;
            }

            &:last-child {
                border-radius: 0px 0px 10px 10px;
            }

            &:hover {
                background-color: #FFA500;
            };
        };

        .icon {
            margin-right: 5px; 
            padding-top: 10px;
        };
    };
`;