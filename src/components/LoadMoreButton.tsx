import { useAtom } from "jotai";
import { useQueryClient } from "@tanstack/react-query";
import Select from "react-select";
import styled from "styled-components";
import { resultsPerPageAtom } from "atoms";
import { useInfiniteAccountants } from "useInfiniteAccountants";
import { FilterWrapper, StyledButton } from "components/ui.styles";
import { DEFAULT_RESULTS_PER_PAGE, RESULTS_PER_PAGE_OPTIONS } from "config";

const Wrapper = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 40px;
`;

export const LoadMoreButton = () => {
  const [resultsPerPage, setResultsPerPage] = useAtom(resultsPerPageAtom);
  const { fetchNextPage, isFetchingNextPage } =
    useInfiniteAccountants(resultsPerPage);
  const queryClient = useQueryClient();

  return (
    <Wrapper>
      <FilterWrapper>
        <label htmlFor="resultsPerPage">Ilość</label>
        <Select
          id="resultsPerPage"
          options={RESULTS_PER_PAGE_OPTIONS}
          value={{ value: resultsPerPage, label: resultsPerPage }}
          onChange={(option) => {
            setResultsPerPage(option?.value ?? DEFAULT_RESULTS_PER_PAGE);
            // resets pages count
            queryClient.resetQueries(["accountants"]);
          }}
          styles={{
            container: (baseStyles) => ({
              ...baseStyles,
              width: "100%",
            }),
          }}
        />
      </FilterWrapper>
      <StyledButton
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        Pobierz więcej
      </StyledButton>
    </Wrapper>
  );
};
