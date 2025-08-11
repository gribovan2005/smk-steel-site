"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const leadSchema = z.object({
  name: z.string().trim().max(100).optional(),
  phone: z
    .string()
    .trim()
    .min(7, "Укажите телефон")
    .max(30, "Слишком длинный номер"),
  email: z.string().trim().email("Некорректный email").optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (values: LeadFormValues) => {
    setStatus("idle");
    try {
      const form = new FormData();
      if (values.name) form.append("name", values.name);
      form.append("phone", values.phone);
      if (values.email) form.append("email", values.email);
      if (values.message) form.append("message", values.message);
      if (file) form.append("file", file);

      const res = await fetch("/api/lead", {
        method: "POST",
        body: form,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      reset();
      setFile(null);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Имя</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Ваше имя"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Телефон*</label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="+7 (___) ___-__-__"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="example@mail.ru"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Комментарий</label>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="Кратко опишите задачу"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Файл (чертеж/задание)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.zip"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-orange-600 file:px-3 file:py-2 file:text-white hover:file:bg-orange-700"
        />
        {file && <p className="mt-1 text-xs text-gray-500">Выбран файл: {file.name}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-2.5 text-white font-semibold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-60"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      {status === "ok" && (
        <p className="text-green-700 text-sm">Заявка отправлена. Мы свяжемся с вами.</p>
      )}
      {status === "error" && (
        <p className="text-red-700 text-sm">Ошибка отправки. Попробуйте позже.</p>
      )}
    </form>
  );
} 