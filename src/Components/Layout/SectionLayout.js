import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "12rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7rem",
    },
  },
}));

const SectionLayout = ({ children, className, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={`section ${classes.root} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default SectionLayout;
