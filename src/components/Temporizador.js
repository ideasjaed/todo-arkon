import React from "react";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import StopIcon from "@material-ui/icons/Stop";
import RestoreIcon from "@material-ui/icons/Restore";
function Temporizador({ open, onClose, data }) {
  return (
    <div>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {data}
          <PauseCircleFilledIcon />
          <StopIcon />
          <RestoreIcon />
        </Alert>
      </Collapse>
    </div>
  );
}

export default Temporizador;
