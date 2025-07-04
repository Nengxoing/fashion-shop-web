// D:\Nengxiong\Next JS\Shop\fashion-shop-web\src\app\(auth)\login\container\form.tsx
"use client";

import React from "react";
import { useLoginForm } from "./hook";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Card, CardContent } from "@/components/ui/card";
import { loginUser } from "../api/login";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const res = await loginUser(data);
      console.log("Login success:", res);
      alert("Login successful!");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Login failed:", err.message);
      alert("Login failed!.");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="space-y-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto bg-white rounded-lg space-y-8"
          noValidate
        >
          <Heading className="text-center">ເຂົ້າສູ່ລະບົບ</Heading>

          <div>
            <Label htmlFor="email" className="block font-semibold">
              ອີເມວ
            </Label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="user@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-red-600 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="block font-semibold">
              ລະຫັດຜ່ານ
            </Label>
            <Input
              type="password"
              id="password"
              {...register("password")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="ປ້ອນລະຫັດຜ່ານ"
            />
            {errors.password && (
              <p className="mt-1 text-red-600 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "ກຳລັງເຂົ້າສູ່..." : "ເຂົ້າສູ່ລະບົບ"}
          </Button>

          <p className="text-center text-gray-600">
            ບໍ່ມີບັນຊີ?{" "}
            <a href="/register" className="underline text-blue-600">
              ສະໝັກບັນຊີ
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
