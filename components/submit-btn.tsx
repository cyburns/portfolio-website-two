import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { ArrowUpward } from "@mui/icons-material";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] bg-black  text-white rounded-lg outline-none transition-all hover:bg-opacity-50 dark:hover:bg-opacity-50 dark:bg-[#252526]  disabled:bg-opacity-50 w-full dark:text-white"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <ArrowUpward className="text-xl text-white dark:text-white opacity-70 " />{" "}
        </>
      )}
    </button>
  );
}
