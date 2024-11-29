import React from "react";
import { useFormContext } from "../context/FormContext";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";

const FormPreview: React.FC = () => {
  const { formComponents, removeComponent } = useFormContext();

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#f5f5f5",
        maxWidth: 600,
        mx: "auto",
        mt: 4,
      }}
    >
     
      {formComponents.length === 0 ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          No components added yet.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {formComponents.map((comp, index) => (
            <Card key={index} variant="outlined" sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {comp.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {comp.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="error"
                  onClick={() => removeComponent(index)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default FormPreview;
