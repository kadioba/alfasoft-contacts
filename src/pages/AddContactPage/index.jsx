import { useEffect, useState } from "react";
import { AddContactContainer } from "./styled";
import { useNavigate, useParams } from "react-router-dom";

export default function AddContactPage() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const findContacts = JSON.parse(localStorage.getItem("contacts"));
            if (findContacts) {
                const contactFound = findContacts.find(contactFound => contactFound.id === Number(id));
                if (contactFound) {
                    setName(contactFound.name);
                    setContact(contactFound.contact);
                    setEmail(contactFound.email);
                    setPicture(contactFound.picture);
                } else {
                    alert("Contact not found");
                    navigate("/");
                }
            } else {
                alert("Contact not found");
                navigate("/");
            }

        }
    }, [id, navigate]);

    function submitContact(e) {
        e.preventDefault();
        const duplicatedData = verifyContactAndEmail();
        if (duplicatedData) return
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        const newContact = {
            name,
            contact,
            email,
            picture,
            id: contacts.length + 1
        };

        const updatedContacts = [...contacts, newContact];
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        navigate("/");
    }

    function updateContact(e) {
        e.preventDefault();
        const duplicatedData = verifyContactAndEmail();
        if (duplicatedData) return
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        const contactIndex = contacts.findIndex(contact => contact.id === Number(id));
        contacts[contactIndex].name = name;
        contacts[contactIndex].contact = contact;
        contacts[contactIndex].email = email;
        contacts[contactIndex].picture = picture;
        localStorage.setItem("contacts", JSON.stringify(contacts));
        navigate("/");
    }

    function verifyContactAndEmail() {
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        const contactFind = contacts.find(contactFound => contactFound.contact === contact);
        const emailFind = contacts.find(contactFound => contactFound.email === email);
        if (contactFind) {
            if (id && (contactFind.id === Number(id))) {
                return false
            }
            if (id && (contactFind.id !== Number(id))) {
                alert("Contact already exists 1");
                return true
            } else {
                alert("Contact already exists 2");
                return true;
            }
        } else if (emailFind) {
            if (id && (emailFind.id === Number(id))) {
                return false
            }
            if (id && (emailFind.id !== Number(id))) {
                alert("Email already exists 1");
                return true;
            } else {
                alert("Email already exists 2");
                return true;
            }
        }
        return false;
    }

    return (
        <AddContactContainer>
            <h1>{id ? "Edit Contact" : "Add Contact"}</h1>
            <form onSubmit={id ? updateContact : submitContact}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} minLength={5} />
                <input type="tel" placeholder="Contact Number" onChange={(e) => setContact(e.target.value)} value={contact} minLength={9} maxLength={9} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="text" placeholder="Picture" onChange={(e) => setPicture(e.target.value)} value={picture} required />
                <button type="submit">Submit</button>
            </form>
        </AddContactContainer>
    );
}
