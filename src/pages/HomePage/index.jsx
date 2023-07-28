import { useNavigate } from "react-router-dom";
import { AddContactButton, ContactCardsContainer, HomePageContainer, HomePageHeader } from "./styled";
import ContactCard from "../../components/ContactCard";

export default function HomePage() {

    const navigate = useNavigate();

    const contacts = JSON.parse(localStorage.getItem("contacts"))
    console.log(contacts)

    return (
        <HomePageContainer>
            <HomePageHeader>Contacts</HomePageHeader>

            
            <ContactCardsContainer>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
            </ContactCardsContainer>


            <AddContactButton onClick={() => navigate("/add")}>+</AddContactButton>
        </HomePageContainer>
    )
}
