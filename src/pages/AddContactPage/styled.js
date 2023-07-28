import { styled } from "styled-components";
import { mainColor, mainTextColor } from "../../constants/colors";

export const AddContactContainer = styled.div`
    width: 95%;
    max-width: 600px;
    height: 100%;
    background-color: ${mainColor};
    margin: 10px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    h1{
        color: ${mainTextColor};
        font-size: 45px;
        font-weight: 700;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    input {
        width: 95%;
        height: 25px;
        margin: 10px;
        border-radius: 10px;
        border: none;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 5px;
        font-size: 15px;
    }
`;

export const SubmitButton = styled.button`
    width: 50%;
    height: 40px;
    margin: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 5px;
    font-size: 25px;
    font-weight: 700;
    background-color: white;
    color: ${mainTextColor};
    cursor: pointer;
    &:hover{
        background-color: ${mainTextColor};
        color: white;
    }
`;

export const BackToHomeButton = styled.button`
    width: 50%;
    height: 40px;
    margin: 10px;
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