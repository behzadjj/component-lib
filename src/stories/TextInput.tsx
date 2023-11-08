import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  errorClassName?: string;
  errors?: FieldErrors<FieldValues>;
  onChange?: (...event: unknown[]) => void;
}

export const TextInput = ({
  label,
  containerClassName = "",
  labelClassName = "",
  errorClassName = "",
  className = "",
  name = "textInput",
  errors,
  ...rest
}: Props) => {
  return (
    <div className={"input--container " + containerClassName}>
      {label && (
        <div className={"input--label " + labelClassName}>
          <label htmlFor={name}>{label}</label>
        </div>
      )}
      <div className={"input--main" + className}>
        <input type="text" id={name} {...rest} />
      </div>
      {errors && errors[name] && (
        <p className={"input--error " + errorClassName} role="alert">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
