import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";

const ContactList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-5 text-center">
      <Link className="mb-2 btn btn-success" to={"/addContact"}>Add New Contact</Link>

      {store.contacts.length > 0 ? (
        store.contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      ) : (
        <h1>No se han encontrado contactos</h1>
      )}
    </div>
  );
};

export default ContactList;
