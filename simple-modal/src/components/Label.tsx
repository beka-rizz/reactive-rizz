import React from "react";

type LabelProps = React.ComponentPropsWithoutRef<"label"> & {
  children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ className = "block text-gray-700 text-sm font-bold mb-2", children, ...props }) => {
  return <label className={className} {...props}>{children}</label>;
};

export default Label;
