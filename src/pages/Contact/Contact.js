import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data || "Previous Page"); // default to "Previous Page" if no state is provided
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handlePost = (e) => {
    e.preventDefault();
    let valid = true;
    
    // Validation
    if (!clientName) {
      setErrClientName("Enter your Name");
      valid = false;
    }
    if (!email) {
      setErrEmail("Enter your Email");
      valid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a Valid Email");
      valid = false;
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
      valid = false;
    }

    if (valid) {
      setSuccessMsg(
        `Thank you dear ${clientName}, your message has been received successfully. Further details will be sent to you at ${email}.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form className="pb-20" onSubmit={handlePost}>
          <h1 className="font-titleFont font-semibold text-3xl mb-6 text-gray-800">
            Fill out the form below
          </h1>
          <div className="w-full max-w-lg mx-auto py-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="clientName"
                className="text-base font-titleFont font-semibold text-gray-600"
              >
                Name
              </label>
              <input
                id="clientName"
                onChange={handleName}
                value={clientName}
                className="w-full py-2 border-b-2 px-3 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your name"
              />
              {errClientName && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errClientName}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-base font-titleFont font-semibold text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                onChange={handleEmail}
                value={email}
                className="w-full py-2 border-b-2 px-3 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="email"
                placeholder="Enter your email"
              />
              {errEmail && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errEmail}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="messages"
                className="text-base font-titleFont font-semibold text-gray-600"
              >
                Message
              </label>
              <textarea
                id="messages"
                onChange={handleMessages}
                value={messages}
                cols="30"
                rows="4"
                className="w-full py-2 border-b-2 px-3 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                placeholder="Enter your message"
              ></textarea>
              {errMessages && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errMessages}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-44 bg-primeColor text-gray-200 h-12 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
