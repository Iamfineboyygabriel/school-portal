import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import fgp from "../../../public/pgp-img.jpeg";
import Button from "../../components/Button";

export default function LoginPage() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsEmailValid(emailValue.trim().length > 0);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsPasswordValid(passwordValue.trim().length > 0);
  };

  const isButtonEnabled = isEmailValid && isPasswordValid;

  return (
    <div className="flex h-screen w-full items-center ">
      {/* Left section with background image */}
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

      {/* Right section with login form */}
      <div className="sm:p-15 flex h-full w-full flex-col items-center justify-center bg-[#f8fafc] text-[#172554] md:p-10 lg:w-1/2 lg:p-20">
        <div className="w-full flex-col rounded-lg bg-white sm:max-w-[370px]  sm:p-4 md:max-w-[600px] lg:p-6">
          <div className="mb-2 flex w-full flex-col items-center">
            <h4 className="font-roboto mb-2 font-semibold sm:text-3xl lg:text-5xl">
              Login
            </h4>
            <p className="mb-2 md:text-lg md:font-bold lg:text-base lg:font-medium">
              Welcome back! Please enter your login details
            </p>
          </div>
          <div className="flex w-full flex-col sm:gap-y-2 lg:gap-y-5">
            <div>
              <label htmlFor="email">E-mail address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="my-2 w-full rounded-sm border bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
                onChange={handleEmailChange}
                value={email}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="my-2 w-full rounded-sm border bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <Button type="submit" disabled={!isButtonEnabled}>
              Login
            </Button>
          </div>

          <div className="flex w-full items-center justify-end">
            {" "}
            <p className="underline-none my-5 flex cursor-pointer whitespace-nowrap text-sm font-medium">
              <Link
                onClick={() => setIsModalOpen(true)}
                to="#"
                value={password}
              >
                Forgot password ?
              </Link>
            </p>
          </div>

          <div className="my-2 flex w-full items-center justify-center">
            <p className="text-base font-normal text-black">
              Dont have an account?
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
          <div className="flex flex-col items-center">
            <img
              src={fgp}
              className="sm:w-13 mb-2 rounded-full sm:h-14 lg:h-16 lg:w-16"
              alt=""
            />

            <p className="mb-4 text-xl font-semibold text-blue-950">
              Forgot Password ?
            </p>
            <span className="text-gray-400 sm:mb-5 sm:text-xs lg:mb-9 lg:text-sm">
              a password reset link has been sent to the provided email address,
              click on the link to reset your password.
            </span>
          </div>

          <form>
            <div className="flex w-full flex-col gap-y-1">
              <label
                htmlFor="email"
                className="mb-1 text-left text-blue-950 sm:font-semibold lg:font-medium"
              >
                E-mail address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="mb-4 rounded-sm border bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
                onChange={handleEmailChange}
              />
            </div>
            <Button type="submit" disabled={!isEmailValid}>
              Send Reset Password
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
}
