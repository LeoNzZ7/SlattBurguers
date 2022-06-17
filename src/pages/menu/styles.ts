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

    .menu-modal {
        background-color: rgba(0, 0, 0, 0.95);
        width: 80%;
        height: 80%;
        position: fixed;
        top: 70px;
        left: 135px;
        border: 3px solid #FFA500;
        border-radius: 20px;
    
        .modal {
            display: flex;
            padding: 20px;
            height: 100%;

            .modal-info {
                height: 100%;
                display: flex;
                flex-direction: column;
                flex: 1;
                align-items: center;
                justify-content: center;

                img {
                    width: 300px;
                    height: 300px; 
                };

                h1 {
                    color: #FFA500;
                    margin: 0px;
                    padding: 20px 0px;
                };

                p {
                    color: #FFF;
                    font-weight: bold;
                }

                button {
                    width: 250px;
                    height: 50px;
                    border-radius: 25px;
                    background-color: #FFA500;
                    border: 0;
                    cursor: pointer;

                    &:hover {
                        background-color: #EE9400;
                    };
                };

                &:last-child {
                    justify-content: space-between;
                };
            };
        };
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

    .account-menu {
        background-color: rgba(40, 40, 40, 0.5);
        color: #FFF;

        a {
            text-align: start;
        };

        .icon {
            color:  #FFF;
        };
    };

    .cart-menu {
        background-color: rgba(40, 40, 40, 0.5);
    
        .icon {
            color:  #FFF;
        };
    };
`;

export const MenuArea = styled.div`
    width: 90%;
    flex-wrap: wrap;
    margin: auto;
    border-radius: 20px;
    padding: 0px;
    display: flex;
    justify-content: space-evenly;
`;

export const MenuItem = styled.div`
    width: 30%;
    height: 350px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
    border: 1px solid #FFF;
    border-radius: 25px;
    flex-direction: column;
    align-items: center;
    padding: 0;

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