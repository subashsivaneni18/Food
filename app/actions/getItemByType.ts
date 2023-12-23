import fetcher from "@/libs/fetcher";
import useSwr from "swr";

const getItemByType = (type: string) => {
  const { data, isLoading, error, mutate } = useSwr(
    `/api/itemTypes/${type}`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default getItemByType;
