import React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const Button = ({ type, children }: Props) => {
  return (
    <button
      type={type}
      className="py-3 px-4 mt-12 w-full text-center bg-lightpurple text-white font-bold rounded-lg"
    >
      {children}
    </button>
  );
};

export default Button;
