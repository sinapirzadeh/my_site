import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDelDataOne<T, U>(
  key: [string],
  postFunction: (data: T) => Promise<U>,
  onSuccessKey: string
) {
  const clent = useQueryClient();
  const { mutate } = useMutation<U, unknown, T>({
    mutationKey: key,
    mutationFn: postFunction,
    onSuccess: () => {
      clent.invalidateQueries({ queryKey: [onSuccessKey] });
    },
  });

  return { mutate };
}
