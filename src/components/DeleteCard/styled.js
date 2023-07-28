import { styled } from "styled-components";
import { mainColor, mainTextColor } from "../../constants/colors";

export const DeleteCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteContainer = styled.div`
  width: 70%;
  padding: 20px;
  max-width: 400px;
  height: 220px;
  border-radius: 15px;
  background-color: ${mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    color: black;
    font-size: 20px;
    font-weight: bold;
    margin-top: 40px;
  }
  h2{
    color: ${mainTextColor};
    font-size: 35px;
    font-weight: bold;
    margin-top: 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 180px;
    margin-top: 20px;
  }
  button {
    height: 40px;
    width:  80px;
    border: none;
    background-color: white;
    color: ${mainTextColor};
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:hover {
      background-color: ${mainTextColor};
      color: white;
    }
  }
`;