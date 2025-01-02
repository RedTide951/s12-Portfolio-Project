import React from "react";
import { useAppContext } from "../contexts/AppContext";

const ContactForm = () => {
  const { text } = useAppContext();

  return (
    <dialog id="hire_me_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{text.hireMe}</h3>
        <p className="py-4">{text.contactFormData.description}</p>

        <form id="hireMeForm" onSubmit={(e) => e.preventDefault()}>
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">{text.contactFormData.name}</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              placeholder={text.contactFormData.namePlaceholder}
              required
            />
          </div>

          {/* Contact Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">{text.contactFormData.contact}</span>
            </label>
            <input
              type="email"
              name="contact"
              className="input input-bordered"
              placeholder={text.contactFormData.contactPlaceholder}
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">{text.contactFormData.message}</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder={text.contactFormData.messagePlaceholder}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              {text.contactFormData.send}
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => document.getElementById("hire_me_modal").close()}
            >
              {text.contactFormData.close}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ContactForm;
