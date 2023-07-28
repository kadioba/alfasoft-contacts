import { useNavigate } from "react-router-dom";
import { DeleteContainer, DeleteCover } from "./styled";
import { PropTypes } from "prop-types";

export default function DeleteCard({ id, name, setDeleting }) {

    const navigate = useNavigate();
    function compelteDeletion() {
        const contacts = JSON.parse(localStorage.getItem("contacts"));
        const contact = contacts.find(contact => contact.id === Number(id));
        contacts.splice(contacts.indexOf(contact), 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        setDeleting(false);
        navigate("/");
    }


    return (
        <DeleteCover>
            <DeleteContainer>
                <h1>
                    Do you want to delete this contact?
                </h1>
                <h2>{name}</h2>
                <div>
                    <button onClick={compelteDeletion}>YES</button>
                    <button>NO</button>
                </div>
            </DeleteContainer>
        </DeleteCover>
    )
}

DeleteCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    setDeleting: PropTypes.func,
}