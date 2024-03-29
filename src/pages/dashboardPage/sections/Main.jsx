import Header from "../../../components/Header";
import Ourchat from "../../../components/Ourchat";
import fineboy from "../../../../public/fineboy.jpg";

const Main = () => {
  return (
    <section className="flex h-screen w-4/5 grow flex-col items-center justify-start gap-2 overflow-y-auto bg-white p-4">
      <Header />
      {/*Main section start here */}
      <div
        id="main-section"
        className="grid h-screen w-full grid-cols-1 gap-4 lg:grid-cols-3"
      >
        <div
          id="left"
          className="col-span-2 flex h-full flex-col items-center justify-between gap-3 p-2"
        >
          <div className="mb-4 grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="flex h-full w-full flex-col">
              <div className="hover:scale-10% flex h-full w-full transform cursor-pointer flex-col items-center justify-center gap-5 rounded-xl bg-blue-200 p-5 transition-transform hover:rotate-[5deg]">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-md font-semibold text-black">Jss1</h1>
                  <h1 className="font-semibold text-green-600">21.75%</h1>
                </div>
                {/**/}
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col items-start justify-center gap-1">
                    <h1 className="text-3xl font-semibold text-black">
                      10.328
                    </h1>
                    <p className="text-slate-700">...</p>
                  </div>
                  <div className="cursor-pointer rounded-full bg-blue-400 p-3 text-black hover:bg-blue-500">
                    For
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full w-full flex-col">
              <div className="hover:scale-10% flex h-full transform cursor-pointer flex-col items-center justify-center gap-5 rounded-xl bg-blue-200 p-5 transition-transform hover:rotate-[5deg]">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-md font-semibold text-black">Jss1</h1>
                  <h1 className="font-semibold text-green-600">21.75%</h1>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col items-start justify-center gap-1">
                    <h1 className="text-3xl font-semibold text-black">
                      10.328
                    </h1>
                    <p className="text-slate-700">...</p>
                  </div>
                  <div className="cursor-pointer rounded-full bg-blue-400 p-3 text-black hover:bg-blue-500">
                    For
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full w-full flex-col">
              <div className="hover:scale-10% flex h-full transform cursor-pointer flex-col items-center justify-center gap-5 rounded-xl bg-blue-200 p-5 transition-transform hover:rotate-[5deg]">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-md font-semibold text-black">Jss1</h1>
                  <h1 className="font-semibold text-green-600">21.75%</h1>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col items-start justify-center gap-1">
                    <h1 className="text-3xl font-semibold text-black">
                      10.328
                    </h1>
                    <p className="text-slate-700">...</p>
                  </div>
                  <div className="cursor-pointer rounded-full bg-blue-400 p-3 text-black hover:bg-blue-500">
                    For
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*grid layout ends here*/}
          <Ourchat />
        </div>
        {/**left section ends here */}

        {/**left section start here */}
        <div
          id="right"
          className="flex h-full flex-col items-center justify-between gap-4 p-2"
        >
          <div
            id="top"
            className="flex h-fit w-full flex-col items-center gap-6 rounded-xl bg-slate-100 p-8"
          >
            <div
              id="image-box"
              className="flex w-full flex-col items-center justify-center gap-4"
            >
              <img
                src={fineboy}
                className="h-[100px] w-[100px] rounded-full"
                alt="student image"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-black">
                  Name: <span className="text-base">Colos</span>
                </h1>
                <p className="text-lg text-slate-700">JSS1A</p>
              </div>
            </div>

            <div
              id="student-info"
              className="flex   w-full items-center justify-between gap-8"
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-base font-semibold text-black">
                  Grade <span>3rd</span>
                </h1>
                <p>Pass</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="text-base font-semibold text-black">
                  Grade <span>3rd</span>
                </h1>
                <p>Pass</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="text-base font-semibold text-black">
                  Grade <span>3rd</span>
                </h1>
                <p>Pass</p>
              </div>
            </div>
          </div>
          {/**black-bg */}
          <div
            id="button"
            className="flex h-full w-full flex-col items-center justify-center gap-8 rounded-xl bg-black p-6"
          >
            <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
              <h1 className="text-md text-white">Lorem, ipsum.</h1>
              <button className="text-md cursor-pointer rounded-xl bg-green-600 px-6 py-1 text-white">
                XX
              </button>
            </div>

            <div className="flex h-fit w-full flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-col items-start justify-center gap-1">
                <h1>1,2345</h1>
                <p className="text-sm text-slate-200">Followers Today</p>
              </div>

              <div className="flex flex-col items-start justify-center gap-1">
                <h1>1,2345</h1>
                <p className="text-sm text-slate-200">Followers Today</p>
              </div>

              <div className="flex flex-col items-start justify-center gap-1">
                <h1>1,2345</h1>
                <p className="text-sm text-slate-200">Followers Today</p>
              </div>
            </div>

            {/**/}
            <div className="flex w-full flex-col items-center justify-between md:flex-row">
              <div className="flex w-full items-start justify-center space-x-4 md:justify-start rtl:space-x-reverse">
                <img
                  src={fineboy}
                  alt="student-image"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <img
                  src={fineboy}
                  alt="student-image"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <img
                  src={fineboy}
                  alt="student-image"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <img
                  src={fineboy}
                  alt="student-image"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <img
                  src={fineboy}
                  alt="student-image"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
              </div>

              {/** */}
              <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="text-white">+3iq</h1>
                <p className="text-sm text-slate-200">all student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
