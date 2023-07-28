import { useNavigate } from "react-router-dom";
import { AddContactButton, ContactCardsContainer, HomePageContainer, HomePageHeader } from "./styled";
import ContactCard from "../../components/ContactCard";
import { useState } from "react";
import DeleteCard from "../../components/DeleteCard";

export default function HomePage() {

    const navigate = useNavigate();
    const [deletingContact, setDeletingContact] = useState(false);

    const contacts = JSON.parse(localStorage.getItem("contacts"))
    console.log(contacts)

    return (
        <HomePageContainer>
            <HomePageHeader>Contacts</HomePageHeader>

            {contacts ? (
                <ContactCardsContainer>
                    {contacts.map((contact) => (
                        <ContactCard key={contact.id} contact={contact} setDeletingContact={setDeletingContact} />
                    ))}
                </ContactCardsContainer>
            ) : null}


            <AddContactButton onClick={() => navigate("/add")}>+</AddContactButton>
            {deletingContact ? <DeleteCard id={deletingContact.id} setDeleting={setDeletingContact} name={deletingContact.name} /> : null}

        </HomePageContainer>
    )
}
