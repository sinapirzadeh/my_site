import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";

export function useGetDataBySlug<T>(
  key: QueryKey,
  fetchFunction: () => Promise<T>,
  processData: (data: T) => T = (data) => data,
  options?: Omit<
    UseQueryOptions<T, Error, T, QueryKey>,
    "queryKey" | "queryFn" | "select"
  >
) {
  const { data, isLoading, error } = useQuery({
    queryKey: key,
    queryFn: fetchFunction,
    select: processData,
    ...options,
  });

  return { data, isLoading, error };
}
