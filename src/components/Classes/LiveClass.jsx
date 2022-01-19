import React, { useContext } from "react";
import { Link } from "react-router-dom";

//mui
import { makeStyles } from "@mui/styles";
import { Button, CardMedia, Typography, Card } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

//context
import authContext from "../../context/AuthContext";

//images
// import mathImg from "../../assets/images/maths.jpg";
// import chemImg from "../../assets/images/chemistry.jpg";

const LiveClassCard = (props) => {
  const classes = useStyles();
  const loginUser = useContext(authContext);
  const loggedInUserId = loginUser.id;
  return (
    <div className={classes.wrapper}>
      <div className={classes.cardWrapper}>
        <Card>
          <div className={classes.imageWrapper}>
            <CardMedia
              className={classes.image}
              component="img"
              src={require(`../../assets/images/${props.exam}.jpg`)}
            />
          </div>
          <div className={classes.educatorName}>{props.name}</div>
          <div className={classes.heading1}>
            <Typography>{props.topic}</Typography>

            <div className={classes.editIcon}>
              {props.id === loggedInUserId ? (
                <Link to={`/scheduleclass/edit/${props.scheduleClassId}`}>
                  {" "}
                  <EditIcon />{" "}
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={classes.headingExam}>
            <Typography>{props.exam}</Typography>
          </div>
          <div className={classes.cardBottom}>
            <div className={classes.time}>
              {props.time?.substring(0, 21)} (IST){" "}
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
    height: "370px",
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
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1rem",
  },
  headingExam: {
    margin: "0 0 0 0.2rem",
  },
  editIcon: {
    paddingRight: "10px",
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
