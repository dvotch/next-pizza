"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "../../ui";
import { ClearButton, ErrorText, RequiredSymbol } from "../index";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  name,
  className,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...props} {...register(name)} />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {<ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
