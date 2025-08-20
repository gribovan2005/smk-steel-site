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
  const [files, setFiles] = useState<File[]>([]);

  const onSubmit = async (values: LeadFormValues) => {
    setStatus("idle");
    try {
      const form = new FormData();
      if (values.name) form.append("name", values.name);
      form.append("phone", values.phone);
      if (values.email) form.append("email", values.email);
      if (values.message) form.append("message", values.message);
      if (files && files.length) {
        for (const f of files) form.append("files", f);
      }

      const res = await fetch("/api/lead", {
        method: "POST",
        body: form,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      reset();
      setFiles([]);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-200">Имя</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Ваше имя"
            className="mt-1 w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200">Телефон*</label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="+7 (___) ___-__-__"
            className="mt-1 w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="example@mail.ru"
          className="mt-1 w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">Комментарий</label>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="Кратко опишите задачу"
          className="mt-1 w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">Файлы (чертежи/задание)</label>
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.zip"
          onChange={(e) => setFiles(Array.from(e.target.files || []))}
          className="mt-1 block w-full text-sm text-gray-200 
            file:mr-4 file:rounded-md file:border file:border-white/20 
            file:bg-white file:text-black file:px-3 file:py-2 file:text-sm  
            hover:file:bg-black hover:file:text-white hover:file:border-white"
        />
        {files.length > 0 && (
          <p className="mt-1 text-xs text-gray-400">Выбрано файлов: {files.length}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn w-full sm:w-auto disabled:opacity-60 text-sm" 
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      {status === "ok" && (
        <p className="text-green-400 text-sm">Заявка отправлена. Мы свяжемся с вами.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">Ошибка отправки. Попробуйте позже.</p>
      )}
    </form>
  );
} 