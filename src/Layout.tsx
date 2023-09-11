import { ReactNode } from "react";
import inFaktLogo from "assets/infakt_logo.png";
import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 16px 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 48px 84px;
  }
  ${({ theme }) => theme.mq.md} {
    background-color: red;
  }
`;

const StyledMainContent = styled.main`
  padding: 16px 28px;

  @media (min-width: 1024px) {
    padding: 48px 84px;
  }
`;

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <StyledNav>
      <img src={inFaktLogo} alt="inFakt" />
    </StyledNav>
    <StyledMainContent>{children}</StyledMainContent>
  </>
);
