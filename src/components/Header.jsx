import fineboy from "../../public/fineboy.jpg";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <section className="flex h-fit w-full flex-col items-center justify-between gap-4 rounded-xl bg-slate-100 p-4 lg:h-20 lg:flex-row lg:gap-2">
      <div>
        <h1 className="text-2xl font-semibold">Overview</h1>
      </div>

      <div className="flex items-baseline justify-between gap-10">
        <div
          id="client-info"
          className="flex items-center justify-center gap-4"
        >
          <img
            src={fineboy}
            alt="student-image"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col items-start justify-center">
            <div className="-mb-1 flex items-center justify-center gap-2">
              <h1 className="text-lg font-semibold">Hi Colos</h1>
              <IoIosArrowDown />
            </div>
            <p>Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
