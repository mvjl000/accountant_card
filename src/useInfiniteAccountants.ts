import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchData } from "api";

export const useInfiniteAccountants = (resultsPerPage: number) => {
  const query = useInfiniteQuery(
    ["accountants", resultsPerPage],
    async ({ pageParam = 1 }) => {
      const response = await fetchData(pageParam, resultsPerPage);
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
