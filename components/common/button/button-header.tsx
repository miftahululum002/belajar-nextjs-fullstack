import Link from "next/link";
import { ReactNode } from "react";
type ButtonHeaderProps = {
    url: string;
    children?: ReactNode; // opsional
};

export function ButtonHeader({ children, url }: ButtonHeaderProps) {
    return (
        <Link href={url} className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800">
            {children}
        </Link>
    )
}