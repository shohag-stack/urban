"use client";

import subscribe from "@/app/(core)/lib/subscribe";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type SubscribeForm = {
  email: string;
};

export default function SubscribeInput() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SubscribeForm>();

  const onSubmit = async (data: SubscribeForm) => {
    const res = await subscribe(data);

    if (res?.success) {
      setSent(true);
      reset();
    }
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)} className="relative max-w-sm mt-10 space-y-2">
    <div className="relative">
      <input
        className="input-with-button"
        placeholder="Enter your email"
        {...register("email")}
        type="email"
      />

      <button className="subscribe-btn" type="submit">
        {isSubmitting ? "SUBSCRIBING" : "SUBSCRIBE"}
      </button>
    </div>

    <p className="text-green-500 min-h-[20px]">
      {sent ? "Subscribed successfully" : ""}
    </p>
  </form>
);
}