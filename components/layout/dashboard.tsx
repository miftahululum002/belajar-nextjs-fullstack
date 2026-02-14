import { ReactNode } from "react";
import PageHeader from "../common/page-header";
import Sidebar from "./sidebar";
type DashboardProps = {
    children: ReactNode;
    title?: string;
    subtitle?: string;
    actionHeader?: ReactNode;
};

export function DashboardLayout({ children, title = "", subtitle = "", actionHeader }: DashboardProps) {
    return (
        <div className="bg-zinc-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <Sidebar />
                    </div>
                    <main className="flex-1 rounded-3xl bg-white p-5 sm:p-8 shadow-sm">
                        <PageHeader title={title} subtitle={subtitle} action={actionHeader} />
                        {children}
                    </main>
                </div>
            </div>
        </div>)
}