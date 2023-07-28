import { ContactCardContainer } from "./styled";
import { PropTypes } from "prop-types";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function ContactCard({ contact }) {
    return (
        <ContactCardContainer>
            <img src={contact.picture} alt="random" />
            <div>
                <h1>{contact.name}</h1>
                <h2>{contact.contact}</h2>
                <h2>{contact.email}</h2>
            </div>
            <AiOutlineDelete size="20px" />
            <AiOutlineEdit size="20px" />
        </ContactCardContainer>
    )
}

ContactCard.propTypes = {
    contact: PropTypes.object,
}