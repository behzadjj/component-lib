import { Controller, useFormContext } from "react-hook-form";
import { TextInput } from "../TextInput";
import { SelectInput } from "../SelectInput";
import { TextareaInput } from "../TextareaInput";
import { CheckboxInput } from "../CheckboxInput";
import { RadioInput } from "../RadioInput";

interface Props extends React.ComponentProps<typeof TextInput> {
  name: string;
}

interface SelectProps extends React.ComponentProps<typeof SelectInput> {
  name: string;
}

interface TextareaProps extends React.ComponentProps<typeof TextareaInput> {
  name: string;
}

interface CheckboxProps extends React.ComponentProps<typeof CheckboxInput> {
  name: string;
}

interface RadioProps extends React.ComponentProps<typeof RadioInput> {
  name: string;
}

export const InputController = ({ name, ...rest }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <TextInput placeholder="p" errors={errors} {...field} {...rest} />
      )}
    />
  );
};

export const SelectController = ({ name, ...rest }: SelectProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <SelectInput errors={errors} {...rest} {...field} />
      )}
    />
  );
};

export const TextareaController = ({ name, ...rest }: TextareaProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <TextareaInput errors={errors} {...rest} {...field} />
      )}
    />
  );
};

export const CheckboxController = ({ name, ...rest }: CheckboxProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <CheckboxInput errors={errors} {...rest} {...field} />
      )}
    />
  );
};

export const RadioController = ({ name, ...rest }: RadioProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <RadioInput errors={errors} {...rest} {...field} />
      )}
    />
  );
};
