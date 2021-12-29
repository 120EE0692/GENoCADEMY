import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";

export default function CreateLiveClassForm() {
  const [title, setTitle] = useState("");
  const [meetPlatform, setMeetPlatform] = useState("");
  const [link, setLink] = useState("");
  const [dateAndTime, setDateAndTime] = useState(new Date());

  return (
    <div>
      <TextField
        label="topic"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={dateAndTime}
          onChange={(newValue) => {
            setDateAndTime(newValue);
          }}
        />
      </LocalizationProvider>

      <div>
        <InputLabel> Meet Platform </InputLabel>
        <Select
          value={meetPlatform}
          onChange={(e) => setMeetPlatform(e.target.value)}
        >
          <MenuItem value="google"> Google Meet</MenuItem>
          <MenuItem value="youtube"> YouTube</MenuItem>
          <MenuItem value="zoom"> Zoom</MenuItem>
          <MenuItem value="teams"> Teams</MenuItem>
        </Select>
      </div>

      <div>
        <TextField
          label="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <Button variant="contained">Create</Button>
    </div>
  );
}
