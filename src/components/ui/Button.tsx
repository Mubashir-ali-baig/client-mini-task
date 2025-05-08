import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none";

  const outlineStyle = {
    primary: "",
    secondary:
      "p-[2px] bg-[#9eff00] [clip-path:polygon(10%_0,_100%_0,_100%_80%,_90%_100%,_0%_100%,_0%_25%)] rounded-sm",
  };

  const variantStyles = {
    primary:
      "bg-[#9EFF00] text-black hover:bg-[#9EFF00] [clip-path:polygon(0_0,_90%_0,_100%_20%,_100%_100%,_10%_100%,_0_80%)]  rounded-sm",
    secondary:
      "text-[#9eff00] bg-black [clip-path:polygon(10%_0,_100%_0,_100%_80%,_90%_100%,_0%_100%,_0%_25%)] rounded-sm",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  const combinedBorderClassName = `${outlineStyle[variant]} ${className}`;

  return (
    <span className={combinedBorderClassName}>
      <button className={combinedClassName} {...props}>
        {children}
      </button>
    </span>
  );
};

export default Button;
