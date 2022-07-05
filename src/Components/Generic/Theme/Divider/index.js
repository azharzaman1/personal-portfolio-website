import { Divider as MuiDivider } from "@material-ui/core";

const Divider = ({ marginTop, marginBottom, width, color, orientation }) => {
  return (
    <MuiDivider
      data-aos="fade"
      data-aos-delay="1000"
      data-aos-duration="100"
      orientation={orientation}
      style={{
        margin: "0 auto",
        backgroundColor: color ? color : "rgba(255,255,255,0.25)",
        width: width ? width : "50%",
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    />
  );
};

export default Divider;
