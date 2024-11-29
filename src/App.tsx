// import React, { useState } from "react";
// import FormComponentLibrary from "./components/FormComponentLibrary";
// import DragAndDropFile from "./components/DragAndDropForm";
// import FormRenderer from "./components/FormRenderer";
// import { FormProvider } from "./context/FormContext";
// import { Container, Box, Typography, Grid, Paper, List, ListItem, ListItemText } from "@mui/material";

// const App: React.FC = () => {
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

//   const handleFilesUploaded = (files: File[]) => {
//     setUploadedFiles((prev) => [...prev, ...files]);
//   };

//   return (
//     <FormProvider>
//       <Container maxWidth="lg" sx={{ mt: 4 }}>
//         <Box
//           sx={{
//             textAlign: "center",
//             mb: 4,
//             p: 2,
//             backgroundColor: "#1976d2",
//             color: "#fff",
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             Interactive Form Builder & File Uploader
//           </Typography>
//           <Typography variant="body1" color="inherit">
//             Create custom forms and upload files with ease.
//           </Typography>
//         </Box>

//         <Box sx={{ mb: 6 }}>
//           <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
//             <Typography variant="h5" gutterBottom>
//               Drag and Drop File Upload
//             </Typography>
//             <DragAndDropFile onFilesUploaded={handleFilesUploaded} />
//             {uploadedFiles.length > 0 && (
//               <Box sx={{ mt: 4 }}>
//                 <Typography variant="h6">Uploaded Files:</Typography>
//                 <List>
//                   {uploadedFiles.map((file, index) => (
//                     <ListItem key={index}>
//                       <ListItemText
//                         primary={file.name}
//                         secondary={`Size: ${file.size} bytes`}
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Box>
//             )}
//           </Paper>
//         </Box>

//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 height: "100%",
//                 borderRadius: 2,
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 Component Library
//               </Typography>
//               <Typography variant="body2" color="text.secondary" gutterBottom>
//                 Add components to your form by clicking on the options below.
//               </Typography>
//               <FormComponentLibrary />
//             </Paper>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 height: "100%",
//                 borderRadius: 2,
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 Form Preview
//               </Typography>
//               <Typography variant="body2" color="text.secondary" gutterBottom>
//                 See how your form will look and function for users.
//               </Typography>
//               <FormRenderer />
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </FormProvider>
//   );
// };

// export default App;


// src/App.tsx
import React, { useState } from "react";
import FormComponentLibrary from "./components/FormComponentLibrary";
import DragAndDropFile from "./components/DragAndDropForm"; // Corrected import
import FormRenderer from "./components/FormRenderer";
import FormPreview from "./components/FormPreview"; // Import FormPreview
import { FormProvider } from "./context/FormContext";
import { Container, Box, Typography, Grid, Paper, List, ListItem, ListItemText } from "@mui/material";

const App: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  return (
    <FormProvider>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
            p: 2,
            backgroundColor: "#1976d2",
            color: "#fff",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Interactive Form Builder & File Uploader
          </Typography>
          <Typography variant="body1" color="inherit">
            Create custom forms and upload files with ease.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Drag and Drop File Upload
            </Typography>
            <DragAndDropFile onFilesUploaded={handleFilesUploaded} />
            {uploadedFiles.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">Uploaded Files:</Typography>
                <List>
                  {uploadedFiles.map((file, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={file.name}
                        secondary={`Size: ${file.size} bytes`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Paper>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 2,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Component Library
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Add components to your form by clicking on the options below.
              </Typography>
              <FormComponentLibrary />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 2,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Form Preview
              </Typography>
              <FormPreview /> {/* Added FormPreview here */}
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 2,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Form Renderer
              </Typography>
              <FormRenderer />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </FormProvider>
  );
};

export default App;
