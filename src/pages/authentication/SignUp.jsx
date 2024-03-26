export default function SignUp() {
  return (
    <div className="flex h-screen w-full items-center">
      {/* Image Container */}
      <div className="relative h-full w-1/6">
        <img
          src="./public/education.jpeg"
          className="h-full w-full object-cover transition duration-500 ease-in-out"
          alt=""
        />
      </div>
      {/* Form Container */}
      <div className="flex h-full w-5/6 flex-col items-center justify-center bg-[#f8fafc] p-16 text-[#172554]">
        <div className="h-full w-full flex-col rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-6 flex w-full flex-col items-center">
            <h4 className="font-roboto mb-2 text-5xl font-semibold">
              Create an account
            </h4>
            <p className="mb-2 text-base font-normal">
              Welcome! Please input your details
            </p>
          </div>
          <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1 text-sm font-light">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="my-2 w-full rounded-sm border border-gray-300 bg-transparent px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1 text-sm font-light">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="my-2 w-full rounded-sm border border-gray-300 bg-transparent px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-light">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter a valid email address"
                className="my-2 w-full rounded-sm border border-gray-300 bg-transparent px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="class" className="mb-1 text-sm font-light">
                Class
              </label>
              <select
                id="class"
                className="my-2 w-full rounded-sm border border-gray-300 bg-transparent px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
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
              <label htmlFor="password" className="mb-1 text-sm font-light">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter a strong address"
                className="my-2 w-full rounded-sm border border-gray-300 bg-transparent px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="mb-1 text-sm font-light"
              >
                Confirm Password
              </label>
              <input
                id="password"
                type="password"
                className="my-2 w-full rounded-sm border border-gray-300 bg-transparent px-4 py-2 text-sm text-black placeholder-gray-400 outline-none focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-8 flex w-full items-center justify-center">
            <button className="flex w-full  items-center justify-center rounded-md bg-[#172554] p-4 text-center font-light text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
