"use client";
// import Link component from next/link
import Link from "next/link";

// import icon dari lucide-react
import { ExternalLink, HomeIcon } from 'lucide-react';

export default function Navbar() {

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav className="border-b border-zinc-200/70 bg-white/80 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Brand */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="group inline-flex items-center gap-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white shadow-sm">
                                <HomeIcon className="h-5 w-5 text-white transition group-hover:rotate-12" />
                            </span>
                            <span className="text-sm font-semibold tracking-wide text-zinc-900">
                                Beranda
                            </span>
                        </Link>
                        <div className="flex items-center gap-3">
                            <a href="https://codopro.id" target="_blank" className="group inline-flex items-center gap-2">
                                <span className="text-sm tracking-wide text-zinc-900 hover:border-b-2 hover:border-zinc-300">
                                    Codo Pro ID
                                    <ExternalLink className="ml-1 mb-2 inline-block h-4 w-4 text-zinc-900" />
                                </span>
                            </a>
                            {/* <a href="https://santrikoding.com/tutorial-set" target="_blank" className="group inline-flex items-center gap-2">
                                <span className="text-sm tracking-wide text-zinc-900 hover:border-b-2 hover:border-zinc-300">
                                    Tutorial Set
                                    <ExternalLink className="ml-1 mb-2 inline-block h-4 w-4 text-zinc-900" />
                                </span>
                            </a> */}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://codopro.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/20"
                        >
                            Codo Pro ID
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
