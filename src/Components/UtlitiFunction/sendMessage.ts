"use server";
import { FieldValues } from "react-hook-form";

export const sendMessage = async (formData: FieldValues) => {
  const res = await fetch(
    `https://backend-templeted.vercel.app/dev/v1/contact/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
