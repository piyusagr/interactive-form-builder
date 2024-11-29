// src/components/DragAndDropFile.tsx
import React, { useState } from "react";
import { Box, Typography, CircularProgress, Button, List, ListItem, ListItemText } from "@mui/material";

interface DragAndDropFileProps {
  onFilesUploaded: (files: File[]) => void;
}

const DragAndDropFile: React.FC<DragAndDropFileProps> = ({ onFilesUploaded }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Handle drag over event to allow dropping
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle drop event to process dropped files
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const files = Array.from(e.dataTransfer.files);

    // Handle file validation (optional)
    const validTypes = ["image/png", "image/jpeg", "application/pdf"];
    const validFiles = files.filter(file => validTypes.includes(file.type));

    if (validFiles.length > 0) {
      onFilesUploaded(validFiles); // Upload valid files only
      setUploadedFiles((prev) => [...prev, ...validFiles]); // Add valid files to the list
    } else {
      alert("Only PNG, JPEG, and PDF files are allowed.");
    }

    setIsLoading(false);
  };

  // Handle file input change when files are selected from the button
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setIsLoading(true);

    // Handle file validation (optional)
    const validTypes = ["image/png", "image/jpeg", "application/pdf"];
    const validFiles = files.filter(file => validTypes.includes(file.type));

    if (validFiles.length > 0) {
      onFilesUploaded(validFiles);
      setUploadedFiles((prev) => [...prev, ...validFiles]);
    } else {
      alert("Only PNG, JPEG, and PDF files are allowed.");
    }

    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        border: "2px dashed #1976d2",
        padding: 3,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: 2,
        backgroundColor: "#f0f0f0",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="h6" color="text.primary">
            Drag and Drop your files here or
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            component="label"
          >
            Choose Files
            <input
              type="file"
              hidden
              multiple
              onChange={handleFileInputChange}
            />
          </Button>
        </>
      )}

      
    </Box>
  );
};

export default DragAndDropFile;
