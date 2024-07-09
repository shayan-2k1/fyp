// import React from "react";

// const sizeClasses = {
//   txtOutfitMedium1067Red900cc: "font-medium font-outfit",
//   txtCairoBold16Black900: "font-bold font-cairo",
//   txtOutfitRegular1067Black90001: "font-normal font-outfit",
//   txtOutfitMedium1181: "font-medium font-outfit",
//   txtCairoSemiBold18: "font-cairo font-semibold",
//   txtSairaCondensedRegular14: "font-normal font-sairacondensed",
//   txtCairoRegular14: "font-cairo font-normal",
//   txtOutfitMedium1067: "font-medium font-outfit",
//   txtOutfitMedium20: "font-medium font-outfit",
//   txtCairoBold24: "font-bold font-cairo",
//   txtCairoBold14Pink400: "font-bold font-cairo",
//   txtCairoBold14: "font-bold font-cairo",
//   txtCairoBold16: "font-bold font-cairo",
//   txtPoppinsMedium20: "font-medium font-poppins",
//   txtCairoSemiBold18Black900: "font-cairo font-semibold",
//   txtOutfitRegular1067: "font-normal font-outfit",
//   txtNunitoRegular20: "font-normal font-nunito",
//   txtOutfitRegular1244: "font-normal font-outfit",
//   txtCairoRegular14Gray50002: "font-cairo font-normal",
//   txtOutfitMedium646: "font-medium font-outfit",
//   txtOutfitRegular1181: "font-normal font-outfit",
//   txtOutfitMedium20Gray900e5: "font-medium font-outfit",
// };

// const Textprofile = ({ children, className = "", size, as, ...restProps }) => {
//   const Component = as || "p";

//   return (
//     <Component
//       className={`text-left ${className} ${size && sizeClasses[size]}`}
//       {...restProps}
//     >
//       {children}
//     </Component>
//   );
// };

// export { Textprofile };
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

const Textprofile = ({ children, className = "", size, as, ...restProps }) => {
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

export { Textprofile };

