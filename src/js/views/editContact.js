import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

const EditContacts = () => {
    const { actions, store } = useContext(Context);
    const { id } = useParams(); // Get the contact id from the route params
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    // Fetch the contact data when the component mounts
    useEffect(() => {
        if (store.contacts.length > 0) {
            const contact = store.contacts.find(contact => contact.id === parseInt(id, 10)); //comprobamos que el id es un numero, porque sino no se rellena el formulario
            if (contact) {
                setForm(contact); // Pre-fill the form with the contact's data
            }
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleEditContact = (e) => {
        e.preventDefault();
        actions.editContact(id, form); // Call the action to edit the contact
        window.alert("El contacto ha sido editado!");
    };

    return (
        <div className="container">
            <h1 className="text-center">Edit Contact</h1>
            <form onSubmit={handleEditContact}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email address</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="number"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label fw-bold">Address</label>
                    <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="w-100 btn btn-primary">Save Changes</button>
            </form>
            <Link className="mt-3 btn btn-secondary" to={"/"}>Go Back to Contacts</Link>
        </div>
    );
};

export default EditContacts;
