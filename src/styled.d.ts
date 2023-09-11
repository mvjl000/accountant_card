// styled.d.ts
import "styled-components";
import { CustomTheme } from "styles/theme";

type MQ = "tablet" | "desktop" | "bigDesktop" | "huge";

declare module "styled-components" {
  type Theme = CustomTheme;
  export interface DefaultTheme extends Theme {}
}
