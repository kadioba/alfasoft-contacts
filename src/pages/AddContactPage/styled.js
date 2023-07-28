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
    button{
        width: 33%;
        height: 25px;
        margin: 10px;
        border-radius: 10px;
        border: none;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 5px;
        font-size: 15px;
        background-color: white;
        color: ${mainTextColor};
        cursor: pointer;
        &:hover{
            background-color: ${mainTextColor};
            color: white;
        }
    }
`;