import React, { useState } from "react";
import { TextField, Fab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

const VideoPlayer = () => {
  const classes = useStyles();

  const [url, SetUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  const getId = () => {
    const VID = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    setVideoId(url.match(VID)[1]);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.searchField}>
        <div className={classes.textField}>
          <TextField
            fullWidth
            value={url}
            onChange={(e) => SetUrl(e.target.value)}
            label="URL"
          ></TextField>
        </div>

        <div>
          <Fab onClick={getId}>
            <SearchIcon />
          </Fab>
        </div>
      </div>
      <div className={classes.video}>
        <iframe
          className={classes.video}
          width="900"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  searchField: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "20px 0px 20px 0px",
  },
  textField: {
    width: "50%",
    paddingRight: "5px",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      paddingRight: "0px",
    },
  },
  video: {
    marginLeft: "2%",
    width: "95%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "500px",
      marginLeft: "0%",
    },
    marginBottom: "100px",
  },
}));
