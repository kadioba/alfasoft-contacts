import { useParams } from "react-router-dom";
import { BackToContacts, ContactDetailsContainer, ContactPageContainer, EditOrDeleteContact } from "./styled";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import DeleteCard from "../../components/DeleteCard";


export default function ContactPage() {

    const { id } = useParams();

    // Buscar os contatos no local storage
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    const contact = contacts.find(contact => contact.id === Number(id));

    const [deleting, setDeleting] = useState(false);
    const deleteContact = () => {
        setDeleting(true);
    }


    return (
        <ContactPageContainer>
            <BackToContacts to={"/"}>Back to Contacts</BackToContacts>
            <ContactDetailsContainer>
                <img src={contact.picture} alt="" />
                <h1>{contact.name}</h1>
                <h2>{contact.contact}</h2>
                <h3>{contact.email}</h3>

            </ContactDetailsContainer>
            <EditOrDeleteContact onClick={deleteContact} >

                <AiOutlineDelete size="40px" />
                <h1>Delete Contact</h1>


            </EditOrDeleteContact>
            <EditOrDeleteContact>

                <AiOutlineEdit size="40px" />
                <h1>Edit Contact</h1>
            </EditOrDeleteContact>

            { deleting ? <DeleteCard id={contact.id} setDeleting={setDeleting} name={contact.name} /> : null}
        </ContactPageContainer>
    )
}