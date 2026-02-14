import Link from "next/link";

type TextLinkProps = {
    url: string;
    text: string;
};

export default function TextLink({ text, url }: TextLinkProps) {
    return (
        <Link href={url} className="text-xs font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700">
            {text}
        </Link>
    )
}