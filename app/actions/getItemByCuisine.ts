import fetcher from "@/libs/fetcher";
import useSwr from "swr";

const getItemsByCuisine = (cuisine: string) => {
  const {data,isLoading,error,mutate} = useSwr(`/api/item/${cuisine}`,fetcher);

  return {
    data,
    isLoading,
    error,
    mutate
  }
};

export default getItemsByCuisine;
