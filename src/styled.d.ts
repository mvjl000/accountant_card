// styled.d.ts
import "styled-components";
import { CustomTheme } from "styles/theme";

declare module "styled-components" {
  type Theme = CustomTheme;
  export interface DefaultTheme extends Theme {}
}
