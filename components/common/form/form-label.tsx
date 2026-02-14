import Tooltip from "../tooltip";

type FormLabelProps = {
    htmlFor: string;
    text: string;
    required?: boolean; // default false
};

export default function FormLabel({ htmlFor, text, required = false }: FormLabelProps) {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-zinc-800">
            {text}
            {required && (
                <Tooltip text="Field ini wajib diisi">
                    <span className="font-bold text-base text-red-500 ml-1">*</span>
                </Tooltip>
            )}
        </label>
    )
}