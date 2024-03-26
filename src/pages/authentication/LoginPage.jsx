import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="relative flex h-full w-1/2 flex-col">
        <div className="absolute left-[10%] top-[25%] flex flex-col items-center">
          <h1 className="my-4 flex text-4xl font-bold text-white">
            Empower Your Learning Journey
          </h1>
          <p className="font-xl font-normal text-white">
            Start your path to success today
          </p>
        </div>
        <img
          src="./public/education.jpeg"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>

      <div className="flex h-full w-1/2 flex-col items-center justify-center bg-[#f8fafc] p-20 text-[#172554]">
        <div className="w-full max-w-[500px] flex-col  rounded-lg bg-white p-6">
          <div className="mb-2 flex w-full flex-col items-center">
            <h4 className="font-roboto mb-2 text-5xl font-semibold">Login</h4>
            <p className="mb-2 text-base font-medium">
              Welcome back! Please enter your login details
            </p>
          </div>
          <div className="flex w-full flex-col">
            <input
              type="password"
              placeholder="Enter your email address"
              className="my-2 w-full rounded-sm border  bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="my-2 w-full rounded-sm border bg-[#f8fafc] px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
            />
          </div>

          <div className="flex w-full items-center justify-end">
            <p className="underline-none my-5 flex cursor-pointer  whitespace-nowrap text-sm font-medium">
              Forgot your password ?
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <button className="my-2 flex w-full items-center justify-center rounded-md bg-[#172554] p-4 text-center text-white">
              Log in
            </button>
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
    </div>
  );
}
