import PropTypes from "prop-types";

const Button = ({ children, disabled, ...props }) => {
  return (
    <button
      className={`rounded w-full bg-blue-950 px-4 py-2 font-bold text-white hover:bg-blue-900 focus:outline-none ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
