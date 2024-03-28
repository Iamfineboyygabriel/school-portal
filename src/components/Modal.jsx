// import { useEffect, useRef } from "react";
// import { FaTimes } from "react-icons/fa";
// import { createPortal } from "react-dom";

// const Modal = ({ children, onCloseModal }) => {
//   const ref = useRef();

//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         onCloseModal();
//       }
//     }

//     // Listen for mouse events
//     document.addEventListener("mousedown", handleClickOutside, true);

//     // Listen for touch events
//     document.addEventListener("touchstart", handleClickOutside, true);

//     return () => {
//       // Remove the event listeners
//       document.removeEventListener("mousedown", handleClickOutside, true);
//       document.removeEventListener("touchstart", handleClickOutside, true);
//     };
//   }, [onCloseModal]);

//   return createPortal(
//     <div className="fixed">
//       <div
//         className="bg-[#f8fafc]] max-h-80vh fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto rounded-lg border border-white p-12 shadow-xl transition-all duration-500"
//         ref={ref}
//       >
//         <button className="bt" onClick={onCloseModal}>
//           <FaTimes style={{ cursor: "pointer" }} />
//         </button>
//         {children}
//       </div>
//     </div>,
//     document.body,
//   );
// };

// export default Modal;
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, onCloseModal }) => {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onCloseModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [onCloseModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-filter">
      <div
        ref={ref}
        className="mx-auto w-full max-w-xl overflow-y-auto rounded-lg bg-white px-10 py-6 shadow-xl"
      >
        <div className="flex justify-end">
          <button
            onClick={onCloseModal}
            className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
