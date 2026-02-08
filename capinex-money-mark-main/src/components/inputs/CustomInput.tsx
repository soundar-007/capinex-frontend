// CustomInput.tsx or CustomInput.jsx (React.js version)

// Packages
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
  FieldErrors,
} from "react-hook-form";
import { Input, Tooltip } from "antd";

// Icons
import { MdError } from "react-icons/md";
import { ReactNode } from "react";

// Props interface
interface CustomInputsProps {
  label: string;
  name: keyof FieldValues;
  errors: FieldErrors<FieldValues>;
  placeholder: string;
  isrequired?: boolean;
  rules?: RegisterOptions<FieldValues>;
  control: Control<FieldValues>;
  disabled?: boolean;
  showLabelIcon?: boolean;
  labelDescription?: string;
  labelIcon?: ReactNode;
  prefix?: ReactNode;
}

const CustomInput = ({
  label,
  placeholder,
  name,
  isrequired,
  rules,
  errors,
  control,
  disabled,
  showLabelIcon,
  labelDescription,
  labelIcon,
  prefix,
}: CustomInputsProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <div>
          <label
            htmlFor={label}
            className="flex justify-start py-1 gap-2 font-semibold items-center"
          >
            <span>
              {label}
              {isrequired && <span className="ml-1 text-primary">*</span>}
            </span>
            {showLabelIcon && (
              <Tooltip title={labelDescription} overlayClassName="text-xs leading-5">
                <span className="flex justify-center items-center text-primaryText h-3 w-3 p-[2px] rounded-full bg-secondaryText flex-none">
                  {labelIcon}
                </span>
              </Tooltip>
            )}
          </label>

          <Input
            data-testid={String(name)}
            onChange={onChange}
            onBlur={(e) => {
              onChange(e.target.value.trim());
              onBlur();
            }}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            status={errors[name] ? "error" : ""}
            prefix={prefix}
            size="large"
          />

          {errors[name] && (
            <div className="h-fit font-medium text-sm text-red-500 flex mt-1 gap-1">
              <MdError className="flex-none mt-[2px]" />
              {`${errors[name]?.message}`}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default CustomInput;
