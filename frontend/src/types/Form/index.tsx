export interface FormButtonProps {
  background?: string;
};

export interface FormInputProps {
  theme: string;
}

export interface FormLabelProps {
  theme: string;
};

export interface FormProps {
  language: string;
  title: string;
  subtitle: string;
  inputs: {
    label: string;
  }[];
  buttons:{
    label: string;
  }[];
  notifications: {
    text: string;
  }[];
};

export interface FormSpanProps {
  theme: string;
};