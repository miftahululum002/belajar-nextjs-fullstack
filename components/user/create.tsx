"use client";

import { useState, ChangeEvent } from "react";
import { useActionState } from "react";
import { createUserAction } from "@/app/actions/user/user-create";
import FormGroup from "../common/form/form-group";
import ButtonCancel from "../common/button/button-cancel";

type FormDataState = {
    name: string;
    email: string;
    password: string;
};

const initialFormData: FormDataState = {
    name: "",
    email: "",
    password: "",
};

export default function UserCreateForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [formState, formAction, isPending] = useActionState(createUserAction, { errors: {} });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="relative">
            {/* Error umum */}
            {formState?.errors?._form?.length && (
                <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {formState.errors._form[0]}
                </div>
            )}

            <form className="space-y-5" action={formAction} noValidate>
                {/* Name */}
                <FormGroup
                    id="name"
                    name="name"
                    type="text"
                    required
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isPending}
                    isError={(formState?.errors?.name?.length ?? 0) > 0}
                    errorMessage={formState?.errors?.name?.[0] ?? ""}
                />

                {/* Email */}
                <FormGroup
                    id="email"
                    name="email"
                    type="email"
                    required
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isPending}
                    isError={(formState?.errors?.email?.length ?? 0) > 0}
                    errorMessage={formState?.errors?.email?.[0] ?? ""}
                />

                {/* Password */}
                <FormGroup
                    id="password"
                    name="password"
                    type="password"
                    required
                    label="Password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isPending}
                    isError={(formState?.errors?.password?.length ?? 0) > 0}
                    errorMessage={formState?.errors?.password?.[0] ?? ""}
                >
                    <p className="mt-2 text-sm text-zinc-500">
                        Must be at least 8 characters.
                    </p>
                </FormGroup>

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
                    <ButtonCancel url="/users">Cancel</ButtonCancel>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-zinc-900/20"
                    >
                        {isPending ? (
                            <span className="inline-flex items-center justify-center gap-2">
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                Creating...
                            </span>
                        ) : (
                            "Create User"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
