import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Feedback = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (props.status) {
      setOpen(true);
    }
  }, [props.status]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={props.duration ? props.duration : 4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={props.type}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export { Feedback };
