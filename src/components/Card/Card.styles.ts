import { StyledButton } from "components/ui.styles";
import styled from "styled-components";

export const Wrapper = styled.li`
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 376px;
  border: 1px solid #e4e6e8;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);

  ${StyledButton} {
    margin-top: 24px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p.label {
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.font.colors.secondary};
  }

  p.name {
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.font.colors.primary};
    font-weight: bold;
  }
`;

export const CardImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const DetailsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  p.label {
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.font.colors.secondary};
  }

  p.value {
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.font.colors.primary};
    line-height: 2.4rem;

    .currency {
      font-size: 1.2rem;
    }
  }
`;
