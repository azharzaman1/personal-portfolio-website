const Heading = ({
  type = "primary",
  className,
  aosDelay,
  index,
  center,
  children,
  ...rest
}) => {
  if (type === "section") {
    return (
      <h2
        className={`text-secondary text-[17px] font-sans text-lg tracking-wide ml-1 font-normal ${className}`}
        data-aos="fade-up"
        data-aos-duration="750"
        {...rest}
      >
        {index && (
          <span className="text-base text-inherit font-medium font-code">
            {index}-{" "}
          </span>
        )}
        {children}
      </h2>
    );
  }

  if (type === "primary") {
    return (
      <h3
        className={`text-[#ecfffd] text-xl tracking-normal leading-normal ${
          center && "text-center"
        } ${className}`}
        data-aos="fade-up"
        data-aos-duration="750"
        {...rest}
      >
        {children}
      </h3>
    );
  }

  if (type === "secondary") {
    return (
      <h4
        className={`text-sm md:text-base lg:text-lg font-sans text-textBright ${
          center && "text-center"
        } ${className}`}
        {...rest}
      >
        {children}
      </h4>
    );
  }
};

export default Heading;
