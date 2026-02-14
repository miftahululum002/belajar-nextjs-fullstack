// import Link
// import authIsRequired to protect the users page
import { authIsRequired } from "@/lib/auth/middleware";

// import table component
import UserTable from "@/components/user/table";

// import Metadata dari next
import { Metadata } from 'next';
import { getUsers } from "@/lib/query";
import { DashboardLayout } from "@/components/layout/dashboard";
import { ButtonHeader } from "@/components/common/button/button-header";

// define metadata untuk halaman sign-in
export const metadata: Metadata = {
    title: 'Users - FullStack Next.js',
    description: 'List of all users',
};

export default async function UsersPage() {
    // protect the page
    await authIsRequired();
    // get all users
    const users = await getUsers();
    return (
        <DashboardLayout title="Users Management" subtitle="List of all users" actionHeader={
            <ButtonHeader url="/users/create">Add User</ButtonHeader>
        }>
            <UserTable users={users} />
        </DashboardLayout>
    );
}
