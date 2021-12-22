import React, { useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function ExpertProgress({ progress }) {
  const classes = useStyles();
  const [tempProgress, setTempProgress] = useState(0);

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
