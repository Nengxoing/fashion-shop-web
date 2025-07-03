"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRegisterForm } from "./hook";
import { Heading } from "@/components/ui/Heading";
import { Eye, EyeOff } from "lucide-react";
import { RegisterSchema } from "./schema";
import axios from "axios";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useRegisterForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (data: RegisterSchema) => {
    try {
      // const res = await axios.post("http://localhost:4000/api/register", data);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
        data
      );

      alert(`Welcome ${res.data.name}! Registration successful.`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.error || "Failed to register");
      } else {
        alert("Something went wrong");
      }
      console.error(error);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6 space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
          <div className="space-y-8">
            <Heading className="text-center">ສະໝັກບັນຊີ</Heading>

            {/* User name */}
            <div className="space-y-1">
              <Label htmlFor="name">ຊື່ຜູ້ໃຊ້</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="ປ້ອນຊື່ຜູ້ໃຊ້ງານລະບົບ"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email">ອີເມວ</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="ປ້ອນອີເມວ"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1 relative">
              <Label htmlFor="password">ລະຫັດຜ່ານ</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="ປ້ອນລະຫັດຜ່ານ"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1 relative">
              <Label htmlFor="confirmPassword">ຢຶນຢັນລະຫັດຜ່ານ</Label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="ຢຶນຢັນລະຫັດຜ່ານອີກຄັ້ງ"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {confirmPassword &&
                confirmPassword !== password &&
                !errors.confirmPassword && (
                  <p className="text-sm text-red-500">ລະຫັດຜ່ານບໍ່ຕົງກັນ!</p>
                )}
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "ກຳລັງສະໝັກບັນຊີ..." : "ສະໝັກບັນຊີ"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
