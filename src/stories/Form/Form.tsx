import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  CheckboxController,
  InputController,
  RadioController,
  SelectController,
  TextareaController,
} from "./InputController";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    transitionType: yup.string().optional(),
    describe: yup.string().optional(),
    acceptCondition: yup.boolean(),
    gender: yup.string(),
  })
  .required();

export const Form = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputController
          label="First Name"
          name="firstName"
          placeholder="Enter your here..."
        />
        <InputController
          label="Last Name"
          name="lastName"
          placeholder="Enter your here..."
        />
        <TextareaController
          label="Describe"
          name="describe"
          placeholder="Enter your here..."
        />
        <SelectController
          label="Transition Type"
          name="transitionType"
          options={[
            { key: "car", value: "Volvo" },
            { key: "bicycle", value: "Overlord" },
          ]}
        />
        <RadioController
          name="gender"
          options={[
            { key: "Male", value: "male" },
            { key: "Female", value: "Female" },
            { key: "Other", value: "other" },
          ]}
        />
        <CheckboxController name="acceptCondition" label="Accept Condition" />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};
