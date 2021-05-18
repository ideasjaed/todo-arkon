import React from "react";
import { Button, ButtonGroup } from "@material-ui/core/";
function OptionsTimeTask({ index, value, handleChange, disabled }) {
  const listTimer = [
    {
      label: "corto",
      value: "30",
    },
    {
      label: "mediano",
      value: "45",
    },
    {
      label: "largo",
      value: "60",
    },
    {
      label: "editar",
      value: "-1",
    },
  ];
  return (
    <div>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {listTimer.map((item) => (
          <Button
            color={item.value === value ? "primary" : ""}
            variant={item.value === value ? "contained" : ""}
            onClick={() => handleChange(item.value)}
            disabled={disabled}
          >
            {item.label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default OptionsTimeTask;
