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
   
    .icon {
        margin: 0px 10px;
        cursor: pointer;
    };
`;