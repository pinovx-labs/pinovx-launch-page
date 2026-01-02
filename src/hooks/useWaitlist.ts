import { useMutation } from "@tanstack/react-query";
import { WaitlistPayload, WaitlistResponse } from "@/types/waitlist";
import { api } from "@/libs/axios";

export const useWaitlist = () => {
  return useMutation<WaitlistResponse, any, WaitlistPayload>({
    mutationFn: async (payload) => {
      const { data } = await api.post(
        "/api-docs#/Waitlist/WaitlistController_addToWaitlist",
        payload
      );
      return data;
    },
  });
};
