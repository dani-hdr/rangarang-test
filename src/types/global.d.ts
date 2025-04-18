type Form = {
  title: string;
  description: string;
  basePrice: number;
  currency: string;
  sections: FormSection[];
};

type FormSection = {
  title: string;
  description: string;
  collapsible: boolean;
  order: number;
  fields: FormField[];
};

type FormField = {
  fieldId: string;
  label: string;
  inputType:
    | "Text"
    | "Number"
    | "Dropdown"
    | "Radio"
    | "Textarea"
    | "File"
    | "CheckBox"
    | "MultiSelect";

  required: boolean;
  
  displayInDescription: boolean;
  defaultValue: string ;
  order: number;
  description: string;
  enabled: boolean;
  isVisible: boolean;
  dependsOn:string | null;
  options?: FormFieldOption[] | null;
  
};

type FormFieldOption = {
    display:string;
    value:number;
    priceFactor:number;
    isDefault:boolean;
    isDisabled:boolean;
    description:string;
    dependentFields: FormField[] | null;
    dependentFieldOptions?: Record<string, DependentFieldOption> | null;
    
}
type DependentFieldOption = {
    isVisible: boolean;
    isDisabled: boolean;
    options?: FormFieldOption[];
  }