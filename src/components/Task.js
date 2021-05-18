import { useState, useEffect } from "react";
import "../styles/Task.css";
import formatTiempoTranscurrido from "../utils/formatTiempoTranscurrido";
import formatSeconds from "../utils/formatSeconds";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core/";

import {
  PlayCircleOutline as PlayCircleOutlineIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  RadioButtonChecked as RadioButtonCheckedIcon,
  DeleteRounded as DeleteRoundedIcon,
  Done as DoneIcon,
} from "@material-ui/icons/";

function Task({
  task,
  onEdit,
  isEdit,
  isEditTimer,
  onDeleteTask,
  onAceptEditChanges,
  onEditTimer,
  onAceptEditTimerChanges,
  onPlay,
  handleCheckTask,
}) {
  const { id, text, transcurrido, duracion, dateComplete, isComplete } = task;
  const [taskText, setTaskText] = useState("");
  const [taskTimer, setTaskTimer] = useState("");

  useEffect(() => {
    setTaskText(text);
  }, [text]);

  useEffect(() => {
    setTaskTimer(duracion);
  }, [duracion]);

  return (
    <>
      <ListItem disabled={isComplete}>
        <ListItemIcon>
          {isComplete ? (
            <RadioButtonCheckedIcon />
          ) : (
            <RadioButtonUncheckedIcon
              color="primary"
              style={{ cursor: "pointer" }}
              onClick={() => handleCheckTask()}
            />
          )}
        </ListItemIcon>

        <ListItemText
          primary={
            isEdit ? (
              <Input
                value={taskText}
                size="small"
                style={{ maxWidth: "calc(100% - 90px)" }}
                fullWidth
                onChange={(e) => setTaskText(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => onAceptEditChanges(taskText)}
                      color="primary"
                    >
                      <DoneIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            ) : (
              <span onDoubleClick={() => onEdit(id)}>{text}</span>
            )
          }
          secondary={
            !isEditTimer ? (
              <span onDoubleClick={() => onEditTimer(id)}>
                {!isComplete ? (
                  <span>
                    {"Tiempo restante " +
                      formatTiempoTranscurrido(duracion, transcurrido)}
                  </span>
                ) : (
                  <span>
                    {" "}
                    Completado en {formatSeconds(transcurrido).format}
                  </span>
                )}
              </span>
            ) : (
              <>
                <TextField
                  variant="outlined"
                  value={formatSeconds(taskTimer).hh}
                  size="small"
                  style={{ width: 50, marginRight: 10 }}
                  onChange={(e) => setTaskTimer(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  value={formatSeconds(taskTimer).min}
                  size="small"
                  style={{ width: 50, marginRight: 10 }}
                  onChange={(e) => setTaskTimer(e.target.value)}
                />

                <IconButton
                  onClick={() => onAceptEditTimerChanges(taskTimer)}
                  color="primary"
                >
                  <DoneIcon />
                </IconButton>
              </>
            )
          }
        />
        <ListItemSecondaryAction>
          {!isComplete && (
            <>
              <IconButton edge="end" onClick={() => onPlay()}>
                <PlayCircleOutlineIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => onDeleteTask()}>
                <DeleteRoundedIcon />
              </IconButton>
            </>
          )}
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

export default Task;
