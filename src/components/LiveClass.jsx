import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, CardMedia, Typography, Card } from "@mui/material";


import mathImg from "../assets/images/maths.jpg"
import chemImg from "../assets/images/chemistry.jpg"
import phyImg from "../assets/images/physics.jpg"

const LiveClassCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardWrapper}>
      <Card>
        <div className={classes.imageWrapper}>
          <CardMedia
            className={classes.image}
            component="img"
            src={mathImg}
          />
        </div>
        <div className={classes.educatorName}>Swati</div>
        <div className={classes.heading1}>
          <Typography bolder variant="h6" component="h1">
            Organic Chemistry | Lec1
          </Typography>
        </div>
        <div className={classes.cardBottom}>
          <div className={classes.time}>10:00 PM - 11:00 PM</div>
          <div classes={classes.button}>
            <Button variant="outlined">Join</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LiveClassCard;

const useStyles = makeStyles({
  cardWrapper: {
    margin: "20px 0 0 30px",
    display: "flex",
    flexDirection: "column",
    width: "270px",
    height: "620px",
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
