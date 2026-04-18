"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Property from "@/types/types";
import Image from "next/image";
import { sendAgentEmail } from "@/app/(core)/lib/sendAgentEmail";

export type AgentProps = {
  agent: Property["agent"];
};

type AgentForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function SideBar({ agent }: AgentProps) {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AgentForm>();

  const onSubmit = async (data: AgentForm) => {
    const res = await sendAgentEmail({
      ...data,
      agentName: agent?.name,
    });

    if (res?.success) {
      setSent(true);
      reset();

      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <div className="sidebar-container bg-amber-200 px-5 py-5 gap-4 flex flex-col sticky top-35">

      {/* AGENT INFO */}
      <div className="sidebar-agent text-center flex flex-col items-center gap-3">
        <h6>Your Personal Agent {agent?.name || "N/A"} is here to help</h6>

        <div className="w-[100px] h-[100px] overflow-hidden rounded-full border-4 border-emerald-500">
          {agent?.image?.asset?.url ? (
            <Image
              src={agent.image.asset.url}
              width={100}
              height={100}
              alt="agent"
              className="object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              N/A
            </div>
          )}
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <input
          {...register("name", { required: true })}
          className="input-rounded w-full py-3"
          type="text"
          placeholder="Full name"
        />

        <input
          {...register("email", { required: true })}
          className="input-rounded w-full py-3"
          type="email"
          placeholder="Email"
        />

        <input
          {...register("phone")}
          className="input-rounded w-full py-3"
          type="text"
          placeholder="Phone number"
        />

        <textarea
          {...register("message", { required: true })}
          className="input-rounded w-full h-[100] rounded-2xl p-2"
          placeholder="Write your message"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary hover:bg-secondary hover:text-white"
        >
          {isSubmitting ? "Sending..." : "Email Agent"}
        </button>

        {sent && (
          <p className="text-green-600 text-sm">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}