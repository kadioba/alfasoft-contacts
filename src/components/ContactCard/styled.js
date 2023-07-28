import { styled } from "styled-components";
import { mainTextColor } from "../../constants/colors";

export const ContactCardContainer = styled.div`
    width: 100%;
    max-width: 500px;
    height: 80px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
    justify-content: space-around;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }
    div {
        width: 66%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    h1 {
        color: ${mainTextColor};
        font-size: 20px;
        font-weight: 500;
    }
    h2 {
        font-size: 15px ;
    }
`;

export const EditOrDeleteContact = styled.div`
    display: flex;
    width: 100px;
    background-color: red;
`