/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

// import icons
import { Trash2 } from 'lucide-react'

// import useFormStatus dari react
import { useFormStatus } from 'react-dom'

// import deleteUserAction
import { deleteUserAction } from '@/app/actions/user/user-delete'

// component DeleteSubmitButton
function DeleteSubmitButton({ title, }: { title?: string }) {
    // destructure useFormStatus
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending} className="inline-flex items-center justify-center rounded-lg p-2 text-red-600 transition hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-60" title={title ?? 'Delete'}>
            <Trash2 className="h-4 w-4" />
        </button>
    )
}

// component DeleteUserForm
export default function DeleteUserForm({ userId, userName, }: {
    userId: string
    userName?: string | null
}) {
    const handleConfirm = (e: any) => {
        const ok = confirm(
            `Yakin ingin menghapus user ${userName ? `"${userName}"` : 'ini'}?`
        )
        if (!ok) e.preventDefault()
    }
    return (
        <form action={deleteUserAction} onSubmit={handleConfirm} className="inline-flex">
            <input type="hidden" name="id" value={userId} />
            <DeleteSubmitButton />
        </form>
    )
}
