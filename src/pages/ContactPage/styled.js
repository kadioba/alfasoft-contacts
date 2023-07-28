import { styled } from "styled-components";
import { mainColor, mainTextColor } from "../../constants/colors";

export const ContactPageContainer = styled.div`
    width: 95%;
    max-width: 600px;
    height: 100%;
    background-color: ${mainColor};
    margin: 10px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const ContactDetailsContainer = styled.div`
    width: 80%;
    max-width: 500px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 10px;
    margin-top: 150px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        position: absolute;
        top: -75px;
        border: 5px solid ${mainTextColor};
        background-color: white;
    }
    h1{
        color: ${mainTextColor};
        font-size: 45px;
        font-weight: bold;
        margin-top: 80px;
    }
    h2 {
        color: ${mainTextColor};
        font-size: 25px;
        font-weight: normal;
        margin-top: 10px;
    }
    h3 {
        color: black;
        font-size: 20px;
        font-weight: 300;
    }
    div{
        display: flex;
        justify-content: space-between;
    }
    `;

export const EditContact = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    margin-top: 30px;
    padding: 10px;
    h1 {
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin-left: 10px;
    }
`;

export const DeleteContact = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    margin-top: 30px;
    padding: 10px;
    h1 {
        color: red;
        font-size: 20px;
        font-weight: bold;
        margin-left: 10px;
    }
`;

export const BackToHomeButton = styled.button`
    width: 80%;
    height: 40px;
    margin-top: 30px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 5px;
    font-size: 25px;
    font-weight: 700;
    background-color: ${mainTextColor};
    color: white;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: ${mainTextColor};
    }
`;
