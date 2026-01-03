"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useWaitlist } from "@/hooks/useWaitlist";
import Button from "../../button/Button";
import WaitlistSuccessModal from "./WaitlistSucces";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { mutateAsync, isPending } = useWaitlist();

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Use toast.promise for a better UX
    await toast.promise(
      mutateAsync({ email }), // mutateAsync returns a promise
      {
        loading: 'Joining waitlist...',
        success: (data) => {
          // Only runs on actual success
          setShowModal(true);
          setEmail("");
          return data.message || "Added to waitlist!";
        },
        error: (err) => {
          // Only runs on actual error
          const errorMessage = err?.response?.data?.message || "Something went wrong.";
          return errorMessage;
        },
      }
    ).catch(() => {
      // Catch empty to prevent unhandled promise rejection in console
      // The error is already handled by toast.promise
    });
  };

  return (
    <>
      <div className="flex px-4 md:px-0 flex-col md:flex-row gap-5 mt-2 items-center w-full max-w-[680px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="w-full md:w-[380px] rounded-lg py-2.5 px-4 bg-white/95 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <Button
          type="button"
          onClick={handleSubmit}
          disabled={isPending}
          text={isPending ? "Joining..." : "Join Our Waitlist"}
          className="w-full md:w-auto"
        />
      </div>

      {showModal && (
        <WaitlistSuccessModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}