import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;

  grid-template-columns: 1fr;
  grid-row-gap: 48px;
  grid-column-gap: 24px;

  ${({ theme }) => theme.mq.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mq.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${({ theme }) => theme.mq.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${({ theme }) => theme.mq.xl} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
