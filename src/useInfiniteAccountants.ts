import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchData } from "api";

export const useInfiniteAccountants = () => {
  const query = useInfiniteQuery(
    ["accountants"],
    async ({ pageParam = 1 }) => {
      const response = await fetchData(pageParam);
      return response;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );

  return query;
};
