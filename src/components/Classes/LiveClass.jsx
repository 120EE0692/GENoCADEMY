import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, CardMedia, Typography, Card } from "@mui/material";

import mathImg from "../../assets/images/maths.jpg";
import chemImg from "../../assets/images/chemistry.jpg";
import phyImg from "../../assets/images/physics.jpg";

const LiveClassCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.cardWrapper}>
        <Card>
          <div className={classes.imageWrapper}>
            <CardMedia
              className={classes.image}
              component="img"
              src={mathImg}
            />
          </div>
          <div className={classes.educatorName}>{props.name}</div>
          <div className={classes.heading1}>
            <Typography bolder variant="h6" component="h1">
              {props.topic} | {props.exam}
            </Typography>
          </div>
          <div className={classes.cardBottom}>
            <div className={classes.time}>
              {props.time.substring(0, 21)} (IST){" "}
            </div>
            <div classes={classes.button}>
              <Button href={props.link} rel="noopener" variant="outlined">
                Join
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LiveClassCard;

const useStyles = makeStyles({
  wrapper: {
    display: "inline-block",
  },
  cardWrapper: {
    margin: "20px 10px 10px 20px",
    display: "flex",
    flexDirection: "column",
    width: "270px",
    height: "350px",
  },
  imageWrapper: {
    width: "270px",
    height: "250px",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  educatorName: {
    margin: "0.2rem 0 0 0.2rem",
    fontWeight: "bolder",
  },
  heading1: {
    margin: "0.2rem 0 0 0.2rem",
    fontWeight: "bolder",
  },
  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "0.2 rem",
  },
  time: {
    color: "#617d98",
    fontSize: "0.75rem",
    fontWeight: "bold",
    margin: "0.5rem 0 0 0.2rem",
  },
  button: {
    margin: "0.5rem 0.2rem 0 0",
  },
});
