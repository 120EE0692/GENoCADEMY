import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const img1 =
  "https://static.uacdn.net/thumbnail/course/jpeg/w768/8CD51A38-1A01-414D-A720-382186ED8142_special_class.jpeg";

const LiveClassCard = () => {
  const classes = useStyles();

  return (
    // <h1>Hello</h1>
    <article className={classes.cardWrapper}>
      <img className={classes.image} src={img1} alt="educator Image" />
      <h1 className={classes.heading1}>React</h1>
      <div className={classes.play}>
        <h2 className={classes.heading2}>Abhas</h2>
        <Button
          type="submit"
          className={classes.button}
          size="large"
          variant="contained"
        >
          Play
        </Button>
      </div>
    </article>
  );
};

export default LiveClassCard;

const useStyles = makeStyles({
  cardWrapper: {
    width: "200px",
    height: "100px",
    borderRadius: "1rem",
  },
  image: {
    borderRadius: "1rem",
  },
  heading1: {
    marginTop: "0.5rem",
  },
  heading2: {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  },
  play: {
    display: "flex",
    columnGap: "13rem",
  },
  button: {
    width: "50%",
    height: "10%",
  },
});
