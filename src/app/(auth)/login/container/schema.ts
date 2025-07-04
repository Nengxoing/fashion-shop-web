import * as z from "zod";

export const LoginSchema = z.object({
    email: z
        .string({ required_error: "ກາລຸນາປ້ອນອີເມວ!" })
        .min(1, "ກາລຸນາປ້ອນອີເມວ!")
        .email("ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ"),
    password: z
        .string({ required_error: "ກາລຸນາປ້ອນລະຫັດຜ່ານ!" })
        .min(1, "ກາລຸນາປ້ອນລະຫັດຜ່ານ!"),
});