import React from "react";
import AllClasses from "./GetClassesData";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const Classes = () => {
  const classes = useStyle();
  return (
    <Box>
      <div className={classes.displayGrid}>
        <AllClasses />
      </div>
    </Box>
  );
};

export default Classes;

const useStyle = makeStyles((theme) => ({
  displayGrid: {
    marginLeft: "30px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
  },
}));
