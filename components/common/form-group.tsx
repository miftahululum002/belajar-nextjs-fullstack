import { ReactNode } from "react";
import FormInput from "./form-input";
import FormLabel from "./form-label";

type FormGroupProps = {
    children?: ReactNode
    id: string;
    label: string;
    name: string;
    required?: boolean;
    type?: string;
    disabled?: boolean;
    isError?: boolean; // default false
    errorMessage?: string;
};

export default function FormGroup({ children, id, label, name, required, type, disabled, isError, errorMessage }: FormGroupProps) {
    return (
        <div>
            <FormLabel htmlFor={id} text={label} required={required} />
            <FormInput id={id} name={name} type={type} disabled={disabled} isError={isError} errorMessage={errorMessage}>
                {children}
            </FormInput>
        </div>
    )
}