import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

import "./SwitchInput.css";

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

export const SwitchInput = ({
  label,
  containerClassName = "",
  labelClassName = "",
  errorClassName = "",
  className = "",
  name,
  errors,
  ...rest
}: Props) => {
  return (
    <div className={"input--container " + containerClassName}>
      <label htmlFor={name}>
        <div className={"input--label" + labelClassName}>{label}</div>
        <div className={" switch input--main" + className}>
          <input id={name} type="checkbox" {...rest} />
          <span className="slider round"></span>
        </div>
      </label>
      {errors && errors[name] && (
        <p className={"input--error " + errorClassName} role="alert">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
