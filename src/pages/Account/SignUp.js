import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignUp = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  
  // ============= Event Handlers ========================
  const handleName = (e) => setClientName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleZip = (e) => setZip(e.target.value);

  // ============== Email Validation ====================
  const EmailValidation = (email) => {
    return String(email).toLowerCase().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  // ============== Phone Validation ====================
  const PhoneValidation = (phone) => {
    // Basic phone number validation (assumes a 10-digit number)
    return phone.match(/^[0-9]{10}$/);
  };

  // ============== Handle SignUp ========================
  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      let formValid = true;
      
      if (!clientName) {
        setErrClientName("Enter your name");
        formValid = false;
      }
      if (!email) {
        setErrEmail("Enter your email");
        formValid = false;
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a valid email");
          formValid = false;
        }
      }
      if (!phone) {
        setErrPhone("Enter your phone number");
        formValid = false;
      } else {
        if (!PhoneValidation(phone)) {
          setErrPhone("Enter a valid phone number");
          formValid = false;
        }
      }
      if (!password) {
        setErrPassword("Create a password");
        formValid = false;
      } else {
        if (password.length < 6) {
          setErrPassword("Password must be at least 6 characters");
          formValid = false;
        }
      }
      if (!address) {
        setErrAddress("Enter your address");
        formValid = false;
      }
      if (!city) {
        setErrCity("Enter your city name");
        formValid = false;
      }
      if (!country) {
        setErrCountry("Enter the country you are residing");
        formValid = false;
      }
      if (!zip) {
        setErrZip("Enter the zip code of your area");
        formValid = false;
      }

      if (formValid) {
        setSuccessMsg(
          `Hello ${clientName}, welcome to SmartMavuno! We have received your sign-up request. Your registration is being processed and will be sent to ${email}.`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
        setCity("");
        setCountry("");
        setZip("");
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">Get started for free</h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">Get started fast with SmartMavuno</span>
            </p>
          </div>
          {/* More info */}
        </div>
      </div>

      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">{successMsg}</p>
            <Link to="/signin">
              <button className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300">
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSignUp} className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">Create your account</h1>
              <div className="flex flex-col gap-3">
                {/* Client Name */}
                <div className="flex flex-col gap-.5">
                  <label htmlFor="clientName" className="font-titleFont text-base font-semibold text-gray-600">Full Name</label>
                  <input
                    id="clientName"
                    onChange={handleName}
                    value={clientName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="eg. John Doe"
                  />
                  {errClientName && <p className="text-sm text-red-500 font-titleFont font-semibold px-4">{errClientName}</p>}
                </div>
                
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <label htmlFor="email" className="font-titleFont text-base font-semibold text-gray-600">Work Email</label>
                  <input
                    id="email"
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="john@workemail.com"
                  />
                  {errEmail && <p className="text-sm text-red-500 font-titleFont font-semibold px-4">{errEmail}</p>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-.5">
                  <label htmlFor="phone" className="font-titleFont text-base font-semibold text-gray-600">Phone Number</label>
                  <input
                    id="phone"
                    onChange={handlePhone}
                    value={phone}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="008801234567891"
                  />
                  {errPhone && <p className="text-sm text-red-500 font-titleFont font-semibold px-4">{errPhone}</p>}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <label htmlFor="password" className="font-titleFont text-base font-semibold text-gray-600">Password</label>
                  <input
                    id="password"
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && <p className="text-sm text-red-500 font-titleFont font-semibold px-4">{errPassword}</p>}
                </div>

                {/* Address */}
                <div className="flex flex-col gap-.5">
                  <label htmlFor="address" className="font-titleFont text-base font-semibold text-gray-600">Address</label>
                  <input
                    id="address"
                    onChange={handleAddress}
                    value={address}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="road-001, house-115, example area"
                  />
                  {errAddress && <p className="text-sm text-red-500 font-titleFont font-semibold px-4">{errAddress}</p>}
                </div>

                {/* City */}
                <div className="flex flex-col gap-.5">
                  <label htmlFor="city" className="font-titleFont text-base font-semibold text-gray-600">City</label>
                  <input
                    id="city"
                    onChange={handleCity}
                    value={city}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Your city"
                  />
                  {errCity && <p className="text-sm text-red-500 font-titleFont font-semibold px-4">{errCity}</p>}
                </div>

                {/* Country */}
                <div className="flex flex-col gap-.5">
                  <label htmlFor="country" className="font-titleFont text-base font-semibold text-gray-600">Country</label>
                  <input
                    id="country"
                    onChange={handleCountry}
                    value={country}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Your country"
                  />
                  {errCountry && <p className="text-sm text-red-500 font-titleFont font-semibold px-4">{errCountry}</p>}
                </div>

                {/* Zip */}
                <div className="flex flex-col gap-.5">
                  <label htmlFor="zip" className="font-titleFont text-base font-semibold text-gray-600">Zip/Postal Code</label>
                  <input
                    id="zip"
                    onChange={handleZip}
                    value={zip}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Your zip"
                  />
                  {errZip && <p className="text-sm text-red-500 font-titleFont font-semibold px-4">{errZip}</p>}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                    checked={checked}
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the OREBI{" "}
                    <span className="text-blue-500">Terms of Service</span> and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!checked}
                  className={`${
                    checked ? "bg-primeColor hover:bg-black" : "bg-gray-500 cursor-not-allowed"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Create Account
                </button>

                <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signin">
                    <span className="hover:text-blue-600 duration-300">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
