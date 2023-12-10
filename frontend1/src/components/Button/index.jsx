import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[15px]" };
const variants = {
  fill: {
    light_blue_900: "bg-light_blue-900 text-white-A700",
    white_A700: "bg-white-A700 text-blue-100",
  },
};
const sizes = { xs: "p-6 sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "light_blue_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["light_blue_900", "white_A700"]),
};

export { Button };
