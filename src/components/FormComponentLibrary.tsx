// src/components/FormComponentLibrary.tsx
import React from "react";
import { useFormContext } from "../context/FormContext";
import { List, ListItem, ListItemText, Button, Typography } from "@mui/material";

const COMPONENTS = [
  { type: "text", label: "Text Input" },
  { type: "select", label: "Dropdown" },
  { type: "radio", label: "Radio Buttons" },
];

const FormComponentLibrary: React.FC = () => {
  const { addComponent } = useFormContext();

  return (
    <div>
     
      <List>
        {COMPONENTS.map((comp, idx) => (
          <ListItem key={idx} sx={{ display: "flex", justifyContent: "space-between" }}>
            <ListItemText primary={comp.label} />
            <Button variant="contained" size="small" onClick={() => addComponent(comp)}>
              Add
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FormComponentLibrary;
