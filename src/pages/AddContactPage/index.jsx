import { useState } from "react";
import { AddContactContainer } from "./styled";

export default function AddContactPage() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");

    function submitContact() {
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
    }

    return (
        <AddContactContainer>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" placeholder="Contact Number" onChange={(e) => setContact(e.target.value)} value={contact} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="text" placeholder="Picture" onChange={(e) => setPicture(e.target.value)} value={picture} />
            <button onClick={submitContact}>Submit</button>
        </AddContactContainer>
    );
}
