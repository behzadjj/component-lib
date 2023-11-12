import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

import "./RadioInput.scss";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  options: Array<{
    key: string;
    value: string | number | readonly string[] | undefined;
  }>;
  name: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  errorClassName?: string;
  errors?: FieldErrors<FieldValues>;
  onChange?: (...event: unknown[]) => void;
}

export const RadioInput = ({
  options = [],
  label,
  containerClassName = "radio-input",
  labelClassName = "",
  errorClassName = "",
  className = "",
  name,
  errors,
  ...rest
}: Props) => {
  return (
    <div className={"input--container " + containerClassName}>
      {label && (
        <div className={"input--label" + labelClassName}>
          <label htmlFor={name}>{label}</label>
        </div>
      )}
      {options.map((option) => (
        <label className="input--option" htmlFor={option.value?.toString()}>
          <div className={"input--option--label"}>{option.key}</div>
          <div className={"input--option-main" + className}>
            <input
              id={option.value?.toString()}
              name={name}
              type="radio"
              {...rest}
            />
            <span className="checkmark"></span>
          </div>
        </label>
      ))}
      {errors && errors[name] && (
        <p className={"input--error " + errorClassName} role="alert">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
