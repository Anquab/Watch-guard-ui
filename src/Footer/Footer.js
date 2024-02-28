import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid black",
        display: "flex",
        flexDirection: "column",
        gap: "1px",
        paddingLeft: "0px"
      }}
    >
      <h4 style={{ textDecorationLine: "underline", marginBottom: "0px" }}>
        Social Media Assistant
      </h4>
      <p style={{ marginTop: "0px",fontSize: "13px" }}>GenAI based Application</p>
    </footer>
  );
};

export default Footer;
