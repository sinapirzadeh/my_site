import { useMutation } from "@tanstack/react-query";

export function usePostData<T, U>(
  postFunction: (data: T) => Promise<U>,
  onSuccess?: (data: U) => void,
  onError?: (error: unknown) => void
) {
  const { mutate, error, data } = useMutation({
    mutationFn: postFunction,
    onSuccess,
    onError,
  });

  return { mutate, error, data };
}
