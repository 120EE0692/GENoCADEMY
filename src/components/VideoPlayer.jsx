import React, { useState } from "react";
import { TextField, Fab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

const VideoPlayer = () => {
  const classes = useStyles();

  const [url, SetUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  const getId = () => {
    const Id = url.split("=");
    setVideoId(Id[1]);
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

const useStyles = makeStyles({
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
  },
  video: {
    marginLeft: "2%",
  },
});
