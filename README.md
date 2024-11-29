

# Interactive Form Builder

This project implements a drag-and-drop form builder along with a file upload feature. Users can create custom forms, preview the forms with added components, and upload files using a drag-and-drop interface. The app utilizes Material-UI components for styling and React for dynamic updates and state management.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Technology Choices and Rationale](#technology-choices-and-rationale)
- [Known Limitations/Trade-offs](#known-limitationstrade-offs)
- [Future Improvements](#future-improvements)
- [Live Demo](#live-demo)
- [Time Spent](#time-spent)

---

## Setup Instructions

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/piyusagr/interactive-form-builder.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd interactive-form-builder
   ```

3. **Install dependencies**:
   Ensure you have `Node.js` and `npm` installed, then run:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

---

## Technology Choices and Rationale

1. **React**:
   - **Why**: React is used for building the user interface. It provides a component-based architecture, making the app modular and easy to maintain. It also allows for efficient updates to the UI with state management.
   
2. **Material-UI (MUI)**:
   - **Why**: MUI is a popular React component library that provides a consistent, customizable set of components. It helps to quickly create a polished, responsive, and visually appealing UI.
   
3. **React Context API**:
   - **Why**: The Context API is used for global state management, specifically to manage the state of the form components. This allows the form components and related actions (add/remove) to be accessed and modified across different components.
   
4. **Drag-and-Drop (react-dnd)**:
   - **Why**: `react-dnd` is a flexible drag-and-drop library that enables the drag-and-drop functionality in the app. It allows users to move form components from a library to a form renderer area.

5. **File Upload (HTML5 Drag-and-Drop + React)**:
   - **Why**: The file upload feature utilizes the built-in HTML5 drag-and-drop API, enhanced with React for state management. This provides a seamless user experience for file uploads.

---

## Known Limitations/Trade-offs

1. **Performance Issues with Large Forms**:
   - **Limitation**: As the number of form components grows, the performance may degrade. This can be addressed by optimizing the re-renders and handling large forms asynchronously.
   
2. **Limited Component Library**:
   - **Limitation**: The form component library is minimal at the moment, supporting basic components such as text fields and buttons. More complex form elements (e.g., multi-select, date pickers) are yet to be added.
   
3. **File Upload Size Limit**:
   - **Limitation**: There is no size validation for the uploaded files. For larger files, performance may degrade, and the app doesn't currently handle file storage beyond local storage.
   
4. **Cross-browser Compatibility**:
   - **Limitation**: While the app works well in modern browsers (Chrome, Firefox), there may be minor issues with older browsers like Internet Explorer. This may be addressed with additional polyfills in the future.

---

## Future Improvements

1. **Component Customization**:
   - Allow users to customize the form components by adding additional properties like placeholders, validation rules, or default values.

2. **File Storage & Backend Integration**:
   - Integrate a backend to handle file uploads and storage, allowing users to store and retrieve uploaded files.

3. **Advanced Form Validation**:
   - Add advanced form validation using libraries like `yup` or `zod` to validate user inputs for specific fields, such as required fields, regex patterns, or min/max lengths.

4. **Component Templates**:
   - Provide predefined form templates (e.g., contact forms, surveys) to speed up the form creation process for users.

5. **Drag-and-Drop Performance Optimization**:
   - Implement optimizations for better handling of large forms and files, potentially using `react-query` or other state management solutions for efficiency.

6. **Mobile Responsiveness**:
   - Enhance the mobile responsiveness to ensure a better user experience on smaller screens. Currently, some features might not be fully optimized for mobile use.

---

## Live Demo

You can view the live demo of the app here:

[**Live Demo Link**](https://interactive-form-builder.vercel.app)


---

## Time Spent

- **Initial Setup**: 1 hours
- **Building the Form Builder**: 3 hours
- **File Upload Functionality**: 2 hours
- **UI Enhancements (Material-UI integration)**: 1 hours
- **Testing & Debugging**: 1 hours
- **Total Time Spent**: 9 hours
