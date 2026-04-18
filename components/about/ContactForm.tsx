"use client";
import sendEmail from "@/app/(core)/lib/sendEmail";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  hearAboutUs: string;
  businessType: string;
  service: string;
  website: string;
  projectDetails: string;
  budget: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactForm>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await sendEmail(data);
      if (res.success) {
        setSent(true);
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <div className="section">
          {sent && (
              <div className="bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-4">Message Sent!</h3>
                  <p>
                    Thank you for your inquiry. We will get back to you soon.
                  </p>
                </div>
              </div>
            )}
          <div className="flex flex-col md:flex-row gap-10 sm:gap-40">
            

            <div className="flex-1/2">
              <h3>We are looking forward to your enquiry</h3>
              <div>
                <p>
                  Ad noster apeirian qui. Sea mucius iudicabit cu, nam latine
                  euismod ea. Tempor copiosae philosophia id has. Eam novum
                  liberavisse in. Modus populo probatus cum ea, ex graece{" "}
                </p>
                <p>
                  postulant qui, fugit dolor et eam. Quo cu putent causae. Sit
                  ea diam ullum, tation cu voluptua facilisi nec no. Ei laudem
                  iudicabit duo, at quem munere eam putant mediocrem.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap flex-1/2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full"
                action=""
              >
                <div className="flex flex-col pb-5">
                  <label
                    className=" pb-2 text-md text-black font-semibold"
                    htmlFor=""
                  >
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    {...register("firstName")}
                    className="py-3 border-b w-full focus:outline-none transition-all ease-in-out"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col pb-5">
                  <label
                    className=" pb-2 text-md text-black font-semibold"
                    htmlFor=""
                  >
                    {" "}
                    email{" "}
                  </label>
                  <input
                    {...register("email")}
                    className="py-3 border-b w-full focus:outline-none transition-all ease-in-out"
                    type="email"
                    placeholder="demo@realestate.com"
                  />
                </div>

                <div className="flex flex-col pb-5">
                  <label
                    className=" pb-2 text-md text-black font-semibold"
                    htmlFor=""
                  >
                    {" "}
                    Message{" "}
                  </label>
                  <textarea
                    {...register("message")}
                    className="py-3 border-b w-full focus:outline-none transition-all ease-in-out"
                    placeholder="Write your message here ..."
                  />
                </div>

                <button className="btn-primary hover:bg-secondary hover:text-white">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
