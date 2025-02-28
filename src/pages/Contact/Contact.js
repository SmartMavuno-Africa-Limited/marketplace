import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useState(() => {
    setPrevLocation(location.state?.data || "Previous Page");
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errIssueType, setErrIssueType] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    let valid = true;

    if (!clientName) {
      setErrClientName("Enter your Name");
      valid = false;
    }
    if (!email) {
      setErrEmail("Enter your Email");
      valid = false;
    }
    if (!issueType) {
      setErrIssueType("Select an Issue Type");
      valid = false;
    }
    if (!message) {
      setErrMessage("Enter your Message");
      valid = false;
    }

    if (valid) {
      setSuccessMsg(
        `Thank you ${clientName}, your support request has been submitted. We will get back to you at ${email}.`
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
            Submit Your Issue
          </h1>
          <div className="w-full max-w-lg mx-auto py-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-base font-titleFont font-semibold text-gray-600">
                Name
              </label>
              <input onChange={(e) => setClientName(e.target.value)} className="w-full py-2 border-b-2 px-3" type="text" placeholder="Enter your name" />
              {errClientName && <p className="text-red-500 text-sm">{errClientName}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-titleFont font-semibold text-gray-600">
                Email
              </label>
              <input onChange={(e) => setEmail(e.target.value)} className="w-full py-2 border-b-2 px-3" type="email" placeholder="Enter your email" />
              {errEmail && <p className="text-red-500 text-sm">{errEmail}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-titleFont font-semibold text-gray-600">
                Issue Type
              </label>
              <select onChange={(e) => setIssueType(e.target.value)} className="w-full py-2 border-b-2 px-3">
                <option value="">Select an Issue</option>
                <option value="purchasing">Purchasing Issue</option>
                <option value="payment">Payment Issue</option>
                <option value="shop_creation">Creating Shop Issue</option>
                <option value="support">General Support</option>
                <option value="billing">Billing Issue</option>
              </select>
              {errIssueType && <p className="text-red-500 text-sm">{errIssueType}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-titleFont font-semibold text-gray-600">
                Message
              </label>
              <textarea onChange={(e) => setMessage(e.target.value)} className="w-full py-2 border-b-2 px-3 resize-none" placeholder="Describe your issue"></textarea>
              {errMessage && <p className="text-red-500 text-sm">{errMessage}</p>}
            </div>

            <button type="submit" className="w-44 bg-primeColor text-gray-200 h-12 font-titleFont hover:bg-black">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
