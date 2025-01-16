import React, { useState } from "react";
import { usePostData } from "../../../../hooks/api/usePostData";
import { postComment } from "../../../../services/site/BlogApi";
import { ICommentType } from "../../../types/types";
import { toast } from "react-toastify";

export default function AddComment() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { error } = usePostData<ICommentType, React.ReactNode>(() =>
    postComment({ name, message, is_delete: false, is_trusted: true })
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("لطفاً تمامی فیلدها را پر کنید.");
      return;
    }

    setLoading(true);
    try {
      await postComment({ name, message, is_delete: false, is_trusted: false });
      setName("");
      setMessage("");
      toast.success("نظر شما بعد تایید قرار خواهد گرفت.");
    } catch {
      toast.error("مشکلی به وجود امده");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border-2 dark:bg-gray-700 dark:text-white rounded-xl p-4">
      {(error as string) && (
        <p className="p-3 text-white bg-red-800 bg-opacity-75 rounded-lg w-auto">
          {error as string}
        </p>
      )}
      <h5 className="text-xl font-bold col-span-6 my-4">افزودن نظر</h5>
      <form method="post" className="space-y-2 grid" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-slate-100 dark:placeholder-white text-slate-800 dark:bg-slate-500 dark:text-white placeholder-gray-700 placeholder:opacity-70 border border-slate-300 col-span-6 outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
          type="text"
          placeholder="نام"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-slate-100 dark:placeholder-white text-slate-800 dark:bg-slate-500 dark:text-white placeholder-gray-700 placeholder:opacity-70 h-28 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
          placeholder="دیدگاه خود را به اشتراک بگذارید"
        ></textarea>
        {loading ? (
          <button
            disabled
            className="flex bg-blue-500 py-2 px-5 text-center text-white rounded-lg shadow-lg opacity-75 cursor-not-allowed"
          >
            صبر کنید
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin h-5 w-5 ml-3 text-white"
            >
              <circle
                strokeWidth="4"
                stroke="currentColor"
                r="10"
                cy="12"
                cx="12"
                className="opacity-25"
              ></circle>
              <path
                d="M4 12a8 8 0 018-8v8H4z"
                fill="currentColor"
                className="opacity-75"
              ></path>
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 py-2 px-10 text-center text-white rounded-lg shadow-lg"
          >
            ارسال
          </button>
        )}
      </form>
    </div>
  );
}
