"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SendHorizontal } from "lucide-react";
import { sendMessage } from "@/components/UtlitiFunction/sendMessage";

const BlogAndContact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const res = await sendMessage(data);
    console.log(res);
    if (res?.data?._id) {
      toast.success(res?.message);
      reset();
    }
  };

  return (
    <div className="md:px-24 px-8 py-12 bg-white dark:bg-gray-800">
      <div className="w-full flex flex-col md:flex-row justify-center gap-12">
        <div className="md:w-1/3 w-full mx-auto">
          <h1 className="text-2xl font-exotwo font-semibold mb-1 text-center text-[#009277]">
            Contact Me
          </h1>
          <h1 className=" font-exotwo text-xl mb-4 text-center">
            I would love to hear from you!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 p-2 block w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#0C9463] focus:border-[#0C9463]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 p-2 block w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#0C9463] focus:border-[#0C9463]"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
                className="mt-1 p-2 block w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#0C9463] focus:border-[#0C9463]"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full mx-auto flex items-center justify-center gap-3 py-2 px-4 bg-[#0C9463] text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-[#0C9463] focus:ring-opacity-50 hover:bg-[#076D49] transition duration-300"
            >
              Send Message <SendHorizontal size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogAndContact;
