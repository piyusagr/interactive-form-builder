interface FormComponent {
    type: string;
    label: string;
  }
  
  interface JSONSchema {
    type: string;
    label: string;
  }
  
  export const generateJSONSchema = (formComponents: FormComponent[]): JSONSchema[] => {
    return formComponents.map((comp) => ({
      type: comp.type,
      label: comp.label,
    }));
  };
  