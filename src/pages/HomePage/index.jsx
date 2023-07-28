import { useNavigate } from "react-router-dom";
import { AddContactButton, HomePageContainer } from "./styled";

export default function HomePage() {

    const navigate = useNavigate();

    const contacts = JSON.parse(localStorage.getItem("contacts"))
    console.log(contacts)

    return (
        <HomePageContainer>
            <h1>Contacts</h1>
            
            <AddContactButton onClick={() => navigate("/add")}>+</AddContactButton>
        </HomePageContainer>
    )
}
