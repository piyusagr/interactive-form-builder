// src/components/FormRenderer.tsx
import React from "react";
import { useFormContext } from "../context/FormContext";
import { Box, Typography, TextField, Select, MenuItem, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const FormRenderer: React.FC = () => {
  const { formComponents } = useFormContext();

  return (
    <Box>
      
      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {formComponents.map((comp, idx) => {
          switch (comp.type) {
            case "text":
              return <TextField key={idx} label={comp.label} variant="outlined" />;
            case "select":
              return (
                <Select key={idx} defaultValue="" displayEmpty>
                  <MenuItem value="">Select an option</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              );
            case "radio":
              return (
                <RadioGroup key={idx} row>
                  <FormControlLabel value="1" control={<Radio />} label="Option 1" />
                  <FormControlLabel value="2" control={<Radio />} label="Option 2" />
                </RadioGroup>
              );
            default:
              return null;
          }
        })}
      </Box>
    </Box>
  );
};

export default FormRenderer;
