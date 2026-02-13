
import { ReactNode } from "react";

interface TooltipProps {
    children: ReactNode;
    text: string;
}
export default function Tooltip({ children, text }: TooltipProps) {
    return (
        <span className="relative group inline-block cursor-help">
            {children}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {text}
            </span>
        </span>
    );
}
