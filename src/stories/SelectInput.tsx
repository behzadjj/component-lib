import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

import "./SelectInput.scss";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
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
  onClearClicked?: () => void;
  onChange?: (...event: unknown[]) => void;
}

export const SelectInput = ({
  options = [],
  label,
  containerClassName = "select-input",
  labelClassName = "",
  errorClassName = "",
  className = "",
  name,
  onClearClicked,
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
      <div className={"input--main" + className}>
        <select id={name} {...rest}>
          {options.map((option) => (
            <option key={option.value?.toString()} value={option.value}>
              {option.key}
            </option>
          ))}
        </select>
        <button onClick={onClearClicked} type="button">
          X
        </button>
      </div>
      {errors && errors[name] && (
        <p className={"input--error " + errorClassName} role="alert">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
