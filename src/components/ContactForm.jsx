import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

const ContactForm = () => {
  const { text } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      contact: formData.get("contact"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSuccess(true);
        e.target.reset();
      } else {
        throw new Error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(text.contactFormData.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <dialog id="hire_me_modal" className="modal" onSubmit={handleSubmit}>
        <div className="modal-box">
          {!success && (
            <>
              <h3 className="font-bold text-xl">{text.hireMe}</h3>
              <p className="py-4">{text.contactFormData.description}</p>
              <form id="hireMeForm" onSubmit={(e) => e.preventDefault()}>
                {/* Name Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      {text.contactFormData.name}
                    </span>
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
                    <span className="label-text">
                      {text.contactFormData.contact}
                    </span>
                  </label>
                  <input
                    type="text"
                    name="contact"
                    className="input input-bordered"
                    placeholder={text.contactFormData.contactPlaceholder}
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      {text.contactFormData.message}
                    </span>
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
                  <button
                    className="btn "
                    type="button"
                    onClick={() =>
                      document.getElementById("hire_me_modal").close()
                    }
                  >
                    {text.contactFormData.close}
                  </button>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading
                      ? text.contactFormData.sending
                      : text.contactFormData.send}
                  </button>
                </div>
              </form>
            </>
          )}

          {success && (
            <div className="padding-4 flex flex-col justify-center text-center gap-6">
              <h2 className="font-bold text-2xl">
                {text.contactFormData.successMessage}
                <span> </span>
                <i className="fa-solid fa-check"></i>
              </h2>
              <button
                className="btn px-8 btn-success"
                onClick={() => {
                  document.getElementById("hire_me_modal").close();
                  setSuccess(false);
                }}
              >
                {text.contactFormData.close}
              </button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
};

export default ContactForm;
