import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #e3f2fd;
  color: ${({ theme }) => theme.font.colors.brand};
  font-size: ${({ theme }) => theme.font.size.sm};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
