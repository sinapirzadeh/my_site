import { useState, useEffect } from "react";

export function useGetData<T>(
  fetchFunction: () => Promise<T>,
  processData: (data: T) => T = (data) => data
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchFunction()
      .then((response) => {
        setData(processData(response));
      })
      .catch(() => {
        setError("مشکلی در بارگذاری داده‌ها وجود دارد.");
      })
      .finally(() => setLoading(false));
  }, [fetchFunction]);

  return { data, loading, error };
}
