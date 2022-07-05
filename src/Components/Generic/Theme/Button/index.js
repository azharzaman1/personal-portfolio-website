import React from "react";

const Button = ({
  type = "primary",
  size = "md",
  variant = "outlined",
  startIcon,
  endIcon,
  children,
  className,
  isSubmitButton,
  ...rest
}) => {
  const sizes = {
    xs: "text-sm px-2",
    sm: "font-normal text-sm py-1 px-3",
    md: "font-medium text-base py-1.5 px-4",
    lg: "font-medium text-base py-2.5 px-7",
  };

  const variants = {
    contained: "text-white bg-secondary hover:bg-secondaryLight",
    outlined:
      "text-secondary bg-transparent hover:bg-secondary hover:text-white",
  };

  if (type === "primary") {
    return (
      <button
        className={`${sizes[size]} ${variants[variant]} flex flex-row items-center justify-center rounded border-2 border-secondary  transition-colors duration-150 tracking-normal leading-7 ${className}`}
        type={isSubmitButton && "submit"}
        {...rest}
      >
        {startIcon && (
          <span className="primary-button-start-icon mr-2">{startIcon}</span>
        )}
        <span>{children}</span>
        {endIcon && <span className="button-end-icon ml-2">{endIcon}</span>}
      </button>
    );
  }

  if (type === "text") {
    return (
      <button
        className={`flex items-center justify-center text-textBright hover:text-secondaryLight transition-colors duration-150 ${className}`}
        type={isSubmitButton && "submit"}
        {...rest}
      >
        {startIcon && (
          <span className="button-start-icon text-button-start-icon mr-2">
            {startIcon}
          </span>
        )}
        <span>{children}</span>
        {endIcon && <span className="button-end-icon ml-2">{endIcon}</span>}
      </button>
    );
  }
};

export default Button;
