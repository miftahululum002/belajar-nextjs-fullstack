import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
    url: string;
    children?: ReactNode; // opsional
};
export default function ButtonLink({ children, url }: ButtonLinkProps) {
    return (
        <Link href={url} className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900">
            {children}
        </Link>
    )
}