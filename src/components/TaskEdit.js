import { useState } from "react";
import "../styles/Task.css";
import FormTask from "./FormTask";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
import TimerTask from "./TimerTask";
import OptionsTimeTask from "./OptionsTimeTask";
import InputEditTime from "./InputEditTime";

function TaskEdit({ task, index, completeTask, removeTask, updateTask }) {
  const {
    id,
    text,
    duracion,
    transcurridoMinutos,
    transcurridoSegundos,
    dateComplete,
    isComplete,
  } = task;
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const [timeSelect, setTimerSelect] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <FormTask edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <div className={task.isComplete ? "task-row complete" : "task-row"}>
      <div className="container__task">
        <div key={task.id} onClick={() => completeTask(task.id)}>
          {task.text}
        </div>
        {!isComplete && (
          <div>
            <EditIcon
              onClick={() => setEdit({ id: task.id, value: task.text })}
            />
            <DeleteIcon onClick={() => removeTask(task.id)} />

            {timeSelect !== "-1" ? (
              <OptionsTimeTask
                index={index}
                value={timeSelect}
                handleChange={(v) => setTimerSelect(v)}
              />
            ) : (
              <InputEditTime setTimeCustom={(v) => console.log(v)} />
            )}
            <TimerTask
              timer={timeSelect}
              isActive={isActive}
              onPause={() => console.log("pause")}
              onPlay={() => console.log("play")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskEdit;
