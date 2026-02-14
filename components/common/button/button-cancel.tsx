import Link from "next/link";
import { ReactNode } from "react";

type ButtonCancelProps = {
    url: string;
    children?: ReactNode; // opsional
};
export default function ButtonCancel({ children, url }: ButtonCancelProps) {
    return (
        <Link href={url} className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50">
            {children}
        </Link>
    )
}