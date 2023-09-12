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

  &:disabled {
    background-color: #efefef;
    color: #aaa;
  }
`;

export const ButtonLink = styled(StyledButton)`
  &:hover {
    text-decoration: underline;
  }
`;

export const FilterWrapper = styled.div`
  width: 25%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-left: 3px;
    color: ${({ theme }) => theme.font.colors.brand};
    font-size: 1.1rem;
  }
`;

export const ErrorMessage = styled.p`
  margin: 100px 0;
  font-size: 3rem;
  color: red;
  text-align: center;
`;

export const LandingLinkWrapper = styled.div`
  margin-top: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
