import { useQuery } from "@tanstack/react-query";

export type TPaginationType = {
    ad_type: string;
    page: number;
  };

export function useGetPagination<pageParams: TPaginationType>() {
const {isPending, data} = useQuery({
    queryKey: ['Ads', pageParams],
    queryFn:  
})
}