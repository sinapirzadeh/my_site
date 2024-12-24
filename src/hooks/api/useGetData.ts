import { useQuery } from "@tanstack/react-query";

export function useGetData<T>(
  key: string,
  fetchFunction: () => Promise<T>,
  processData: (data: T) => T = (data) => data
) {
  const { data, isLoading, error } = useQuery({
    queryKey: [key],
    queryFn: fetchFunction,
    select: processData,
  });

  return { data, isLoading, error };
}
