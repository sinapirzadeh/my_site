import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePostData<T, U>(
  postFunction: (data: T) => Promise<U>,
  onSuccessKey: string,
  onSuccess?: () => void,
  onError?: (error: unknown) => void
) {
  const clent = useQueryClient();
  const { mutate, error, data, isPending, isError, isSuccess, reset } =
    useMutation<U, unknown, T>({
      mutationFn: postFunction,
      onSuccess: () => {
        clent.invalidateQueries({ queryKey: [onSuccessKey] });
      },
      onError: (error) => {
        if (onError) onError(error);
      },
    });

  return {
    mutate,
    error,
    data,
    isPending,
    isError,
    isSuccess,
    reset,
  };
}
