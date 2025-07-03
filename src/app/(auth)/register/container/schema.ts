import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "ກາລຸນາປ້ອນຊື່ຜູ້ໃຊ້!"),
    email: z.string().email("ກາລຸນາປ້ອນອີເມວ!"),
    password: z.string().min(6, "ກາລຸນາປ້ອນລະຫັດຜ່ານຢ່າງໜ້ອຍ 6 ໂຕ!"),
    confirmPassword: z.string().min(6, "ກາລຸນາປ້ອນລະຫັດຢຶນຢັນຢ່າງໜ້ອຍ 6 ໂຕ!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "ລະຫັດຜ່ານບໍ່ຕົງກັນ!",
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
