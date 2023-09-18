import { FC } from "react";

export const Terms: FC = () => {
  return (
    <div
      style={{
        width: "335px",
        fontSize: "14px",
        color: "#A7B2BD",
        lineHeight: "19.12px",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
        cursor: "pointer",
        marginTop: "15px",
      }}
    >
      Продолжая вы соглашаетесь с{" "}
      <a href="/" style={{ textDecoration: "underLine" }}>
        Условиями обслуживания и{" "}
        <a href="/" style={{ color: "#fff" }}>Политикой конфиденциальности </a>
        Ordo marketplace
      </a>
    </div>
  );
};

export default Terms;
