import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  childen?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className = "bg-blue-500 hover:bg-blue-700 font-medium text-white rounded px-4 py-2",
  children,
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
