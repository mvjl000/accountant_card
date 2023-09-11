import styled from "styled-components";
import { StyledButton } from "components/ui.styles";
import { useInfiniteAccountants } from "useInfiniteAccountants";

const Wrapper = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadMoreButton = () => {
  const { fetchNextPage } = useInfiniteAccountants();

  return (
    <Wrapper>
      <StyledButton onClick={() => fetchNextPage()}>
        Pobierz więcej
      </StyledButton>
    </Wrapper>
  );
};
