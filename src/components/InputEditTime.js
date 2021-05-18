import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

function InputEditTime({ setTimeCustom }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <TextField
        id="outlined-number"
        label="Minutos"
        type="number"
        value={input}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ maxLength: "4" }}
        variant="outlined"
        onChange={handleChange}
      />
      <Button onClick={() => setInput(setTimeCustom)} variant="outlined">
        Aceptar
      </Button>
    </div>
  );
}

export default InputEditTime;
