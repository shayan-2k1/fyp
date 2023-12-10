import React from "react";

const sizeClasses = {
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtOverpassExtraBold36: "font-extrabold font-overpass",
  txtNunitoSemiBold28: "font-nunito font-semibold",
  txtNunitoRegular24Blue100: "font-normal font-nunito",
  txtNunitoRegular24: "font-normal font-nunito",
  txtCairoSemiBold18: "font-cairo font-semibold",
  txtCairoRegular14: "font-cairo font-normal",
  txtCairoBold24: "font-bold font-cairo",
  txtCairoBold14Pink400: "font-bold font-cairo",
  txtCairoBold14: "font-bold font-cairo",
  txtCairoBold16: "font-bold font-cairo",
  txtCairoSemiBold18Black900: "font-cairo font-semibold",
  txtNunitoRegular20: "font-normal font-nunito",
  txtNunitoSemiBold20: "font-nunito font-semibold",
  txtCairoRegular14Teal50: "font-cairo font-normal",
  txtCairoBold16Teal50: "font-bold font-cairo",
  txtInterRegular16: "font-inter font-normal",
  txtOpenSans24: "font-normal font-opensans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
