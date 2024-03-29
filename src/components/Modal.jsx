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
        className="lg:w-4xl relative  overflow-y-auto rounded-lg bg-white text-center shadow-xl sm:w-[24rem] md:w-[38rem] sm:p-8 md:px-32 md:py-16"
      >
        <button
          onClick={onCloseModal}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
        >
          <FaTimes />
        </button>
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
