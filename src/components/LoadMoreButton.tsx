import styled from "styled-components";
import { StyledButton } from "components/ui.styles";

const Wrapper = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadMoreButton = () => {
  return (
    <Wrapper>
      <StyledButton>Pobierz więcej</StyledButton>
    </Wrapper>
  );
};
