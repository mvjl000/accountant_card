import { ReactNode } from "react";
import styled from "styled-components";
import inFaktLogo from "assets/infakt_logo.png";

const StyledNav = styled.nav`
  padding: 16px 28px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.mq.sm} {
    padding: 24px 42px;
  }

  ${({ theme }) => theme.mq.lg} {
    padding: 48px 84px;
  }
`;

const StyledMainContent = styled.main`
  padding: 0 28px;

  ${({ theme }) => theme.mq.sm} {
    padding: 0 42px;
  }

  ${({ theme }) => theme.mq.lg} {
    padding: 0 84px;
  }
`;

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <StyledNav>
      <a href="/">
        <img src={inFaktLogo} alt="inFakt" />
      </a>
    </StyledNav>
    <StyledMainContent>{children}</StyledMainContent>
  </>
);
