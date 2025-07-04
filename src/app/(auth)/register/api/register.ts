import axios from "axios";
import { RegisterSchema } from "../container/schema";

export async function registerUser(data: RegisterSchema) {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
            data
        );
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(
            error.response?.data?.error || "Registration failed. Please try again."
        );
    }
}
