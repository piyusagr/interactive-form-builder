import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormComponent {
  type: string;
  label: string;
}

interface FormContextType {
    formComponents: FormComponent[];
    addComponent: (component: FormComponent) => void;
    updateComponent: (index: number, component: FormComponent) => void;
    removeComponent: (index: number) => void;
    setFormComponents: React.Dispatch<React.SetStateAction<FormComponent[]>>; // Add this
  }
  

interface FormProviderProps {
  children: ReactNode;
}

export const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [formComponents, setFormComponents] = useState<FormComponent[]>([]);
  
    const addComponent = (component: FormComponent) => {
      setFormComponents((prev) => [...prev, component]);
    };
  
    const updateComponent = (index: number, component: FormComponent) => {
      setFormComponents((prev) => {
        const updated = [...prev];
        updated[index] = component;
        return updated;
      });
    };
  
    const removeComponent = (index: number) => {
      setFormComponents((prev) => prev.filter((_, i) => i !== index));
    };
  
    return (
      <FormContext.Provider
        value={{
          formComponents,
          addComponent,
          updateComponent,
          removeComponent,
          setFormComponents, // Include this
        }}
      >
        {children}
      </FormContext.Provider>
    );
  };
  

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext must be used within a FormProvider");
  return context;
};
