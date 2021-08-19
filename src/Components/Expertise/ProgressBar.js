import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function ExpertProgress({ progress }) {
  const classes = useStyles();
  const [tempProgress, setTempProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTempProgress((oldProgress) => {
        if (oldProgress === 100) {
          return;
        }
        return Math.min(oldProgress + 45, progress);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress
        variant="determinate"
        value={tempProgress}
        color="secondary"
      />
    </div>
  );
}
