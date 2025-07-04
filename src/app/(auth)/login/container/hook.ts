import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from './schema';

export type LoginFormData = {
    email: string;
    password: string;
};

export function useLoginForm() {
    return useForm({
        resolver: zodResolver(LoginSchema),
        mode: "onSubmit",
    });
}
