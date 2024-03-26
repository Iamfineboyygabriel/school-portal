import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import "./modal.css";
import { createPortal } from "react-dom";

const Modal = ({ children, onCloseModal }) => {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onCloseModal();
      }
    }

    // Listen for mouse events
    document.addEventListener("mousedown", handleClickOutside, true);

    // Listen for touch events
    document.addEventListener("touchstart", handleClickOutside, true);

    return () => {
      // Remove the event listeners
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [onCloseModal]);

  return createPortal(
    <div className="overlay">
      <div
        className="bg-var(--color-bg-variant) max-h-80vh fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto rounded-lg border border-white p-12 shadow-xl transition-all duration-500"
        ref={ref}
      >
        <button className="bt" onClick={onCloseModal}>
          <FaTimes style={{ cursor: "pointer" }} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
