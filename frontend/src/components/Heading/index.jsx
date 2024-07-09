import React from "react";

const sizes = {
  "2xl": "text-4xl font-bold leading-[115%]",
  xl: "text-2xl font-semibold",
  s: "text-base font-bold",
  md: "text-lg font-semibold",
  xs: "text-sm font-bold",
  lg: "text-xl font-bold leading-[115%]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_03 font-cairo ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
