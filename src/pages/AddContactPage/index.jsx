import { useState } from "react";
import { AddContactContainer } from "./styled";

export default function AddContactPage() {
    const { form, setForm } = useState({ name: "", email: "", password: "", confirmPassword: "" })

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function submitForm(e) {
        e.preventDefault()
    }

    return (
        <AddContactContainer>
            <input type="button" value="Add Contact" />
        </AddContactContainer>
    )
}