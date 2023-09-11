import { ReactNode } from "react";
import inFaktLogo from "assets/infakt_logo.png";
import styled, { css } from "styled-components";

const layoutPadding = css`
  padding: 16px 28px;

  ${({ theme }) => theme.mq.sm} {
    padding: 24px 42px;
  }

  ${({ theme }) => theme.mq.lg} {
    padding: 48px 84px;
  }
`;

const StyledNav = styled.nav`
  ${layoutPadding};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledMainContent = styled.main`
  ${layoutPadding};
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
