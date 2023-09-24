import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate("/password-reset");
  };

  return (
    <div>
      <p
        onClick={handleResetPassword}
        style={{
          textAlign: "end",
          color: "#A7B2BD",
          textDecoration: "underline",
          cursor: "pointer",
          fontSize: "14px",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Забыли пароль?
      </p>
    </div>
  );
};

export default ForgotPassword;
