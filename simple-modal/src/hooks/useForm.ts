import React from "react"

export type TInputGroup = {
  name: string;
  value?: React.ReactNode;
  type?: "text" | "password" | "email";
  onChange?: () => void;
}

type FormState = {
  fields: TInputGroup[];
  hasError: boolean;
  getValues: () => any;
}

export const useForm = (_fields: TInputGroup[]) => {
  const fields = _fields.map((field) => ({
    ...field,
    value: "",
  }) as TInputGroup);

  const [formState, setFormState] = React.useState<FormState>({
    fields,
    hasError: false,
    getValues: () => {},
  });

  const updatedFields = formState.fields.map((field) => ({
    ...field,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormState((prev) => ({
        ...prev,
        fields: prev.fields.map((f) => {
          if (f.name === field.name) {
            return {
              ...f,
              value,
            };
          }
          return f;
        }),
      }));
    },
  }));

  return {
    formState: {
      ...formState,
      fields: updatedFields as TInputGroup[],
      getValues: () => {
        const values: any = {};
        formState.fields.forEach((field) => {
          values[field.name] = field.value;
        });
        return values;
      }
    },
  };
};
