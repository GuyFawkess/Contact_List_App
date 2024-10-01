import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const AddContacts = () => {
    const { actions } = useContext(Context);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the target
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value, // Update the corresponding field in the form state
        }));
    };

    const handleAddContact = (e) => {
        e.preventDefault();
        console.log(form)
        actions.addContact(form);

        // Reset the form to its initial state
        setForm({
            name: "",
            email: "",
            phone: "",
            address: "",
        });
        window.alert("Se ha creado un nuevo contacto!");
    }
    return (
        <div className="container">
            <h1 className="text-center">Add a New Contact</h1>
            <form onSubmit={handleAddContact}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label fw-bold">Address</label>
                    <input name="address" value={form.address} onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <button type="submit" className="w-100 btn btn-primary">Save</button>
            </form>
            <Link className="mt-3 btn btn-secondary" to={"/"}>Go Back to Contacts</Link>
        </div>
    )
};

export default AddContacts;