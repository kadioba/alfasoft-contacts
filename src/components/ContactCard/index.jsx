import { ContactCardContainer } from "./styled";
import { PropTypes } from "prop-types";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ContactCard({ contact, setDeletingContact }) {

    const navigate = useNavigate();
    return (
        <ContactCardContainer >
            <img src={contact.picture} alt="random" onClick={() => navigate(`/contact/${contact.id}`)} />
            <div onClick={() => navigate(`/contact/${contact.id}`)}>
                <h1>{contact.name}</h1>
                <h2>{contact.contact}</h2>
                <h2>{contact.email}</h2>
            </div>
            <AiOutlineDelete size="20px" onClick={() => setDeletingContact(contact)} />
            <AiOutlineEdit size="20px" onClick={() => navigate(`/contact/${contact.id}/edit`)} />
        </ContactCardContainer>
    )
}

ContactCard.propTypes = {
    contact: PropTypes.object,
    setDeletingContact: PropTypes.func,
}