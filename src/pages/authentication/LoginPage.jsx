// import { useState } from "react"; // Import useState for state management
// import { Link } from "react-router-dom";

// export default function LoginPage() {
//   const [isEmailValid, setIsEmailValid] = useState(false); // State for email validity
//   const [isPasswordValid, setIsPasswordValid] = useState(false); // State for password validity
//   // const [isModalOpen, setModalOpen] = useState(""); // State for modal visibility

//   const handleEmailChange = (event) => {
//     const email = event.target.value;
//     // Simple email validation (replace with your desired validation logic)
//     setIsEmailValid(email.trim().length > 0); // Check if email is not empty
//   };

//   const handlePasswordChange = (event) => {
//     const password = event.target.value;
//     // Password validation (replace with your desired validation logic)
//     setIsPasswordValid(password.trim().length > 0); // Check if password is not empty
//   };

//   const isButtonEnabled = isEmailValid && isPasswordValid; // Disable button if both states are false

//   return (
//     <div className="flex h-screen w-full items-center ">
//       <div
//         className="relative flex h-full flex-col sm:hidden lg:block lg:w-1/2"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1500099817043-86d46000d58f")',
//           backgroundSize: "cover",
//           height: "100vh",
//         }}
//       >
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h1 className="my-4 flex text-4xl font-bold text-white">
//             Empower Your Learning Journey
//           </h1>
//           <p className="font-xl font-normal text-white">
//             Start your path to success today
//           </p>
//         </div>
//       </div>

//       <div className="sm:p-15 flex h-full w-full flex-col items-center justify-center bg-[#f8fafc] text-[#172554] md:p-10 lg:w-1/2 lg:p-20">
//         <div className="w-full flex-col rounded-lg bg-white sm:max-w-[370px] sm:p-4 md:max-w-[500px] lg:p-6">
//           <div className="mb-2 flex w-full flex-col items-center">
//             <h4 className="font-roboto mb-2 font-semibold sm:text-3xl lg:text-5xl">
//               Login
//             </h4>
//             <p className="mb-2 md:text-lg md:font-bold lg:text-base lg:font-medium">
//               Welcome back! Please enter your login details
//             </p>
//           </div>
//           <div className="flex w-full flex-col gap-y-5">
//             <div>
//               <label htmlFor="email">E-mail address</label>
//               <input
//                 type="email" // Change type to email for appropriate keyboard input
//                 placeholder="Enter your email address"
//                 className="my-2 w-full rounded-sm border bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
//                 onChange={handleEmailChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="my-2 w-full rounded-sm border bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
//                 onChange={handlePasswordChange}
//               />
//             </div>
//           </div>

//           <div className="flex w-full items-center justify-center">
//             <button
//               className={`my-2 flex w-full items-center justify-center rounded-md bg-[#172554] p-4 text-center text-white ${
//                 isButtonEnabled ? "" : "cursor-not-allowed opacity-50"
//               }`}
//               disabled={!isButtonEnabled}
//             >
//               Log in
//             </button>
//           </div>

//           <div className="flex w-full items-center justify-end">
//             <p className="underline-none my-5 flex cursor-pointer  whitespace-nowrap text-sm font-medium">
//               Forgot your password ?
//             </p>
//           </div>

//           <div className="my-2 flex w-full items-center justify-center">
//             <p className="text-base font-normal text-black">
//               Dont have an account?{" "}
//               <Link
//                 to="/sign-up"
//                 className="cursor-pointer font-semibold underline underline-offset-2"
//               >
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react"; // Import useState for state management
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

export default function LoginPage() {
  const [isEmailValid, setIsEmailValid] = useState(false); // State for email validity
  const [isPasswordValid, setIsPasswordValid] = useState(false); // State for password validity
  const [isModalOpen, setIsModalOpen] = useState(""); // State for modal visibility

  const handleEmailChange = (event) => {
    const email = event.target.value;
    // Simple email validation (replace with your desired validation logic)
    setIsEmailValid(email.trim().length > 0); // Check if email is not empty
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    // Password validation (replace with your desired validation logic)
    setIsPasswordValid(password.trim().length > 0); // Check if password is not empty
  };

  const isButtonEnabled = isEmailValid && isPasswordValid; // Disable button if both states are false

  return (
    <div className="flex h-screen w-full items-center ">
      <div
        className="relative flex h-full flex-col sm:hidden lg:block lg:w-1/2"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1500099817043-86d46000d58f")',
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="my-4 flex text-4xl font-bold text-white">
            Empower Your Learning Journey
          </h1>
          <p className="font-xl font-normal text-white">
            Start your path to success today
          </p>
        </div>
      </div>

      <div className="sm:p-15 flex h-full w-full flex-col items-center justify-center bg-[#f8fafc] text-[#172554] md:p-10 lg:w-1/2 lg:p-20">
        <div className="w-full flex-col rounded-lg bg-white sm:max-w-[370px] sm:p-4 md:max-w-[500px] lg:p-6">
          <div className="mb-2 flex w-full flex-col items-center">
            <h4 className="font-roboto mb-2 font-semibold sm:text-3xl lg:text-5xl">
              Login
            </h4>
            <p className="mb-2 md:text-lg md:font-bold lg:text-base lg:font-medium">
              Welcome back! Please enter your login details
            </p>
          </div>
          <div className="flex w-full flex-col gap-y-5">
            <div>
              <label htmlFor="email">E-mail address</label>
              <input
                type="email" // Change type to email for appropriate keyboard input
                placeholder="Enter your email address"
                className="my-2 w-full rounded-sm border bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
                onChange={handleEmailChange}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="my-2 w-full rounded-sm border bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <button
              className={`my-2 flex w-full items-center justify-center rounded-md bg-[#172554] p-4 text-center text-white ${
                isButtonEnabled ? "" : "cursor-not-allowed opacity-50"
              }`}
              disabled={!isButtonEnabled}
            >
              Log in
            </button>
          </div>

          <div className="flex w-full items-center justify-end">
            {" "}
            {/* Changed justify-center to justify-end */}
            <p className="underline-none my-5 flex cursor-pointer whitespace-nowrap text-sm font-medium">
              <Link onClick={() => setIsModalOpen(true)} to="#">
                Forgot password ?
              </Link>
            </p>
          </div>

          <div className="my-2 flex w-full items-center justify-center">
            <p className="text-base font-normal text-black">
              Dont have an account?{" "}
              <Link
                to="/sign-up"
                className="cursor-pointer font-semibold underline underline-offset-2"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)}>
          {/* Content for the forgot password modal */}
          <p className="mb-4 text-xl font-semibold text-blue-950">
            Forgot Password
          </p>
          <form>
            {/* Email input for password reset */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block font-bold text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="kindly enter your registered email address"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                // Handle email submission for password reset
              />
            </div>
            <button className="focus:shadow-outline w-full rounded bg-blue-950 px-4 py-2 font-bold text-white hover:bg-blue-900 focus:outline-none">
              Send Reset Link
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
