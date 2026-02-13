import { ReactNode } from "react";

type FormInputProps = {
    children?: ReactNode
    id: string;
    name: string;
    type?: string;
    isError?: boolean; // default false
    disabled?: boolean;
    errorMessage?: string;
};
export default function FormInput({ children, id, name, type = "text", disabled = false, isError = false, errorMessage = "" }: FormInputProps) {
    return (
        <>
            <div className="mt-2">
                <input id={id} name={name} type={type} autoComplete={name} className={`block w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:ring-2 focus:ring-zinc-900/10 ${isError ? "border-red-300" : "border-zinc-200"}`} placeholder={`Entry your ${name}`} disabled={disabled}
                />
            </div>
            {children}
            {isError ? (
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
            ) : null}
        </>

    )
}