import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const usernameValue = username.current.value;
    const fullNameValue = fullName.current.value;

    const error = checkValidData(emailValue, passwordValue);

    if (error) {
      setErrorMessage(error);
      return;
    }

    // Proceed with sign-in/sign-up logic
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        className="w-full h-screen object-cover"
        alt="bg-img"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_medium.jpg"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-96 p-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-8 rounded-md display flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-white mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={username}
          type="text"
          placeholder="Username"
          className={`bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSignIn ? "hidden" : ""}`}
        />
        <input
          ref={fullName}
          type="text"
          placeholder="Full Name"
          className={`bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSignIn ? "hidden" : ""}`}
        />
        <input
          ref={email}
          type="email"
          placeholder="Email or Phone Number"
          className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* <input type='password' placeholder='Confirm Password' className={`bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSignIn ? 'hidden' : ''}`} /> */}
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white mt-15">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            href="#"
            className="text-gray-500 hover:underline"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign Up Now" : "Sign In"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
