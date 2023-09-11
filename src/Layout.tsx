import { ReactNode } from "react";
import inFaktLogo from "assets/infakt_logo.png";
import styled from "styled-components";

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
      <img src={inFaktLogo} alt="inFakt" />
    </StyledNav>
    <StyledMainContent>{children}</StyledMainContent>
  </>
);
