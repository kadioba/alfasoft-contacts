import { styled } from "styled-components";
import { mainColor, mainTextColor } from "../../constants/colors";

export const HomePageContainer = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100%;
    background-color: ${mainColor};
    margin: 10px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const HomePageHeader = styled.h1`
    text-align: center;
    color: ${mainTextColor};
    font-size: 30px;
    font-weight: bold;
`

export const AddContactButton = styled.button`
    background-color: ${mainTextColor};
    color: white;
    border: none;
    border-radius: 30px;
    height: 50px;
    width: 50px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 30px;
    text-align: center;
`;

export const ContactCardsContainer = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
`;