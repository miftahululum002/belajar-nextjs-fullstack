// import authIsRequired dari lib/auth/middleware
import { authIsRequired } from '@/lib/auth/middleware'
import { getCurrentUser } from '@/lib/auth/session'
// import Metadata dari next
import { Metadata } from 'next';
import { DashboardLayout } from '@/components/layout/dashboard';

// define metadata untuk halaman sign-in
export const metadata: Metadata = {
    title: 'Dashboard - FullStack Next.js',
    description: 'Admin dashboard overview',
};

export default async function DashboardPage() {

    // pastikan user sudah authenticated
    await authIsRequired()

    // ambil user yang sedang login
    const user = await getCurrentUser()

    return (
        <DashboardLayout title="Dashboard" subtitle="Overview of your admin panel">
            <p className="mt-3 text-sm text-zinc-600">
                Hi, <strong>{user?.name}</strong>, welcome to your dashboard
            </p>
        </DashboardLayout>
    );
}
