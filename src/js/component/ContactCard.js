import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { FaRegTrashCan, FaPencil, FaPhoneFlip, FaEnvelope } from "react-icons/fa6";
import { BsGeoAltFill } from "react-icons/bs";
import ConfirmationModal from "./ConfirmationModal";
import { Link, useNavigate } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const randomNumber = Math.floor(Math.random() * 95);
  const randomGender = Math.floor(Math.random() * 2);
  const gender = randomGender === 0 ? "women" : "men";
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const deleteContact = () => {
    actions.deleteContact(contact.id);
    setShowModal(false);
  };

  const editContact = () => {
    navigate(`/editContact/${contact.id}`); // Navigate to the edit contact page
  };

  if (!contact) {
    return <div><h1>No contact data available</h1></div>;
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={`https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`}
            className="img-fluid rounded-circle"
            alt={`${contact.name || "Unnamed"}'s avatar`}
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{contact.name || "No Name"}</h5>
            <p className="card-text">
              <i><BsGeoAltFill /></i> {contact.address || "No Address"} <br />
              <i><FaPhoneFlip /></i> {contact.phone || "No Phone"} <br />
              <i><FaEnvelope /></i>{" "}
              <a href={`mailto:${contact.email || ""}`}>{contact.email || "No Email"}</a>
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column justify-content-between align-items-end p-2">
          <i onClick={editContact} className="p-1 text-secondary me-2" style={{ cursor: "pointer" }}><FaPencil size="1.5em" /></i>
          <i onClick={() => setShowModal(true)} className="p-2 text-danger" style={{ cursor: "pointer" }}><FaRegTrashCan size="1.5em" /></i>
        </div>
      </div>
      <ConfirmationModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={deleteContact}
      />
    </div>
  );
};

export default ContactCard;
