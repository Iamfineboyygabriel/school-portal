import Header from "../../../components/Header";
import Ourchat from "../../../components/Ourchat";
import fineboy from "../../../../public/fineboy.jpg";
import { useState } from "react";
import { term } from "../../../components/Data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Main = () => {
  const [selectedTerms, setSelectedTerms] = useState({});

  const handleSelectTerm = (classItem, event) => {
    setSelectedTerms({
      ...selectedTerms,
      [classItem.class]: event.target.value,
    });
  };

  return (
    <section className="flex h-screen w-4/5 grow flex-col items-center justify-start gap-2 overflow-y-auto bg-white p-4">
      <Header />
      {/* Main section start here */}
      <div
        id="main-section"
        className="grid h-screen w-full grid-cols-1 gap-4 lg:grid-cols-3"
      >
        <div
          id="left"
          className="col-span-2 flex h-full flex-col items-center justify-between gap-3 p-2"
        >
          <div className="mb-4 grid w-full grid-cols-1 gap-4 text-white lg:grid-cols-3">
            {term.map((classItem) => (
              <div
                key={classItem.class}
                className="flex h-full w-full flex-col"
              >
                <div className="hover:scale-10% flex h-full w-full transform cursor-pointer flex-col items-center justify-center gap-5 rounded-xl bg-blue-950 p-5 transition-transform hover:rotate-[5deg]">
                  <div className="flex w-full items-center justify-end">
                    <select
                      value={selectedTerms[classItem.class] || ""}
                      onChange={(event) => handleSelectTerm(classItem, event)}
                      className="gap-1.5 rounded-md border border-gray-300 bg-blue-900 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Select Term</option>
                      {classItem.term.map((termItem, index) => (
                        <option key={index} value={termItem}>
                          {termItem}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <h1 className="text-3xl font-semibold">
                        {classItem.class}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* grid layout ends here */}
          <Ourchat />
        </div>
        {/** left section ends here */}

        {/** left section start here */}
        <div
          id="right"
          className="flex h-full flex-col items-center justify-between gap-4 p-2"
        >
          <div
            id="top"
            className="flex h-fit w-full flex-col items-center gap-3 rounded-xl bg-blue-950 p-5 text-white"
          >
            <div
              id="image-box"
              className="flex w-full flex-col items-center justify-center gap-2"
            >
              <img
                src={fineboy}
                className="h-[80px] w-[80px] rounded-full"
                alt="student image"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-1xl font-bold">
                  Name: <span className="text-sm text-gray-300">Colos</span>
                </h1>
                <p className="text-sm font-bold text-gray-300">JSS1A</p>
              </div>
            </div>

            <div
              id="student-info"
              className="flex w-full items-center justify-between gap-8"
            >
              <div className="flex flex-row items-center justify-center gap-1">
                <h1 className="text-base font-semibold">
                  Grade : <span className="text-gray-300">3rd-</span>
                </h1>
                <p className="text-gray-300">Pass</p>
              </div>
            </div>
          </div>
          {/** black-bg */}
          <div
            id="button"
            className="flex h-full w-full flex-col items-center  gap-2 rounded-xl bg-blue-950 p-4"
          >
            <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
              <h1 className="text-md flex items-center text-white">
                List of subjects{" "}
              </h1>
              <button className="text-md flex cursor-pointer items-center rounded-xl bg-blue-900 px-6 py-1 text-white">
                See all
                <MdOutlineKeyboardArrowRight className="ml-1" />
              </button>
            </div>
            <div className="h-0.5 w-full bg-slate-700"></div>
            <div className="flex items-center justify-center gap-1"></div>

            <div className="flex h-fit w-full flex-col items-center justify-between gap-4 md:flex-row"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
