import { Button, Container, TextField } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import "../styles/FormTask.css";
import OptionsTimeTask from "./OptionsTimeTask";

function FormTask(props) {
  const inputRef = useRef(null);
  const [timeSelect, setTimerSelect] = useState("00");
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Container>
      <div className="content-inputs">
        <TextField
          type="text"
          placeholder="Añadir Tarea, Presione la tecla Enter para guardar"
          name="text"
          value={props.value}
          className="task-input"
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          ref={inputRef}
          required
        />

        <Button
          value="corto"
          type="submit"
          variant="outlined"
          color="secondary"
          onClick={props.onSubmit}
          disabled={props.value.length < 4}
        >
          Agregar tarea
        </Button>
      </div>
      <OptionsTimeTask
        value={timeSelect}
        handleChange={setTimerSelect}
        index={props.index}
        disabled={props.value.length < 4}
      />
    </Container>
  );
}

export default FormTask;
