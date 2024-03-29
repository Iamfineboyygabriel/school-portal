import { useState } from "react";
import Button from "../../components/Button";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    class: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Implement your form validation logic here
  const isFormValid = () => {
    // Example: Check if all fields are filled
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <form
      className="flex h-screen w-full items-center justify-center bg-[#f8fafc]"
      onSubmit={handleSubmit}
    >
      <div
        className="relative flex h-full w-2/6 flex-col sm:hidden lg:block"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFmcmljYW4lMjBzdHVkZW50JTIwaW4lMjBjbGFzcyUyMHJvb218ZW58MHx8MHx8fDA%3D")',
          backgroundSize: "cover",
          height: "100vh",
        }}
      ></div>

      <div className=" container flex h-full  w-full items-center justify-center  ">
        <div className="flex  flex-col items-center justify-center rounded-lg bg-white text-[#172554]  shadow-lg sm:p-8 md:w-full lg:w-9/12 lg:p-16">
          <div className="mb-6 flex w-full flex-col items-center">
            <h4 className="font-roboto font-semibold sm:mb-1 sm:text-2xl md:text-4xl lg:mb-2 lg:text-5xl ">
              Create an account
            </h4>
            <p className="hidden text-base font-normal sm:mb-0 sm:block lg:mb-2">
              Welcome! Please input your details
            </p>
          </div>
          <div className="grid w-full grid-cols-1 sm:gap-y-2 md:grid-cols-2 md:gap-x-4 lg:gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1 text-sm font-normal">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="focus:border-blue-#172554 my-2 w-full rounded-sm border border-gray-300 bg-[#f8fafc] px-3 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none sm:px-2 sm:py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1 text-sm font-normal">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="focus:border-blue-#172554 my-2 w-full rounded-sm border border-gray-300 bg-[#f8fafc] px-3 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none sm:px-2 sm:py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-normal">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
                className="focus:border-blue-#172554 my-2 w-full rounded-sm border border-gray-300 bg-[#f8fafc] px-3 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none sm:px-2 sm:py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="class" className="mb-1 text-sm font-normal">
                Class
              </label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="my-2 w-full cursor-pointer rounded-sm border border-gray-300 bg-[#f8fafc] px-3 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none sm:px-2 sm:py-1"
              >
                <option value="" disabled selected>
                  Select your class
                </option>
                <option value="jss1">JSS1</option>
                <option value="jss2">JSS2</option>
                <option value="jss3">JSS3</option>
                <option value="ss1">SS1</option>
                <option value="ss2">SS2</option>
                <option value="ss3">SS3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-sm font-normal">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a strong password"
                className="focus:border-blue-[#172554] my-2 w-full rounded-sm border border-gray-300 bg-[#f8fafc] px-3 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none sm:px-2 sm:py-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="mb-1 text-sm font-normal"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="focus:border-blue-[#172554] my-2 w-full rounded-sm border border-gray-300 bg-[#f8fafc] px-3 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none sm:px-2 sm:py-1"
              />
            </div>
          </div>

          <div className="mt-8 flex w-full items-center justify-center sm:mb-0 lg:mb-5">
            {/* Pass disabled prop based on form validation */}
            <Button disabled={!isFormValid()}>Submit</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
