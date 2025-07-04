import axios from "axios";

interface LoginPayload {
    email: string;
    password: string;
}

export async function loginUser(data: LoginPayload) {
    try {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
            data
        );

        return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(
            error.response?.data?.error || "Login failed. Please try again."
        );
    }
}
