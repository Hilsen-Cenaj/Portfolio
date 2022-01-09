import React from "react";
import CrImg from "./images/cr-icon.png";

const CopyRight = () => {
  return (
    <>
      <p>
        Copyright
        <img src={CrImg} alt="copyright-icon" width="15" height="15" /> 2020 -
        Hilsen Cenaj
      </p>
    </>
  );
};

export default CopyRight;
