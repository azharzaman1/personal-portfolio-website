const Text = ({ type = "primary", center, children, className }) => {
  if (type === "primary") {
    return (
      <p
        className={`text-sm md:text-[15px] text-primaryText text-opacity-90 tracking-wide font-sans ${className}`}
      >
        {children}
      </p>
    );
  }

  if (type === "heading") {
    return (
      <p
        className={`text-xs md:text-sm font-sans text-textBright ${
          center && "text-center"
        } ${className}`}
      >
        {children}
      </p>
    );
  }
};

export default Text;
