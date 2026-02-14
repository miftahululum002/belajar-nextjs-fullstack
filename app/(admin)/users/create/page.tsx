// import authIsRequired to protect the users page
import { authIsRequired } from "@/lib/auth/middleware";
// import UserCreateForm component
import UserCreateForm from "@/components/user/create";
// import Metadata dari next
import { Metadata } from 'next';
import { DashboardLayout } from "@/components/layout/dashboard";
// define metadata untuk halaman sign-in
export const metadata: Metadata = {
    title: 'Create User - FullStack Next.js',
    description: 'Create a new user account',
};

export default async function UsersCreatePage() {
    // protect the page
    await authIsRequired();
    return (
        <DashboardLayout title="Users Management" subtitle="Create new user">
            <UserCreateForm />
        </DashboardLayout>
    );
}
