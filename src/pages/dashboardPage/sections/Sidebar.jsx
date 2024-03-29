import { MdDashboard, MdArrowRightAlt, MdLogout } from "react-icons/md";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "10%" },
};

const navItems = [
  {
    name: "Dashboard",
    icon: MdDashboard,
  },
];

const Sidebar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsExpanded(width > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`px-${isExpanded ? 6 : 8} relative flex h-screen w-1/5 flex-col items-center justify-between gap-10 bg-blue-950 py-${isExpanded ? 6 : 8}`}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {isExpanded ? (
          <div id="logo-box">
            <h1 className="text-4xl font-bold text-red-600">
              National <span className="italic text-yellow-500">College</span>
            </h1>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold text-red-600">N</h1>
            <span className="text-3xl italic text-yellow-500">C</span>
          </div>
        )}

        <div
          id="navlinks-box"
          className="mt-5 flex w-full flex-col items-start justify-center gap-5"
        >
          {navItems.map((item, index) => (
            <div
              key={item.name}
              id="link-box"
              className={`flex w-full cursor-pointer items-center justify-start gap-4 rounded-xl ${
                activeNavIndex === index
                  ? "bg-blue-900 text-white"
                  : "text-white"
              } ${isExpanded ? "px-6 py-2" : "p-2"}`}
              onClick={() => setActiveNavIndex(index)}
            >
              <div className="rounded-full  bg-blue-800 p-1 text-white">
                <item.icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <span className={`text-lg ${isExpanded ? "flex" : "hidden"}`}>
                {item?.name}{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
      {""}
      <div
        id="expanded-icon"
        className={`absolute bottom-20 right-4 cursor-pointer rounded-full bg-blue-800 p-2 text-black md:bottom-40 md:right-8 md:flex ${
          isExpanded ? "hidden" : "flex"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <MdArrowRightAlt />
      </div>

      <div
        id="logout-box"
        className="mb-11 flex w-full cursor-pointer flex-col items-center justify-start gap-4"
      >
        <div className="h-0.5 w-full bg-slate-700"></div>
        <div className="flex items-center justify-center gap-2">
          {isExpanded ? (
            <>
              <MdLogout className="h-6 w-6 text-white" />
              <span className="text-lg text-white">Log out</span>
            </>
          ) : (
            <MdLogout className="h-6 w-6 text-white" />
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Sidebar;
