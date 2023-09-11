const customMQ = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

export const theme = {
  mq: {
    xs: customMQ(768),
    sm: customMQ(1024),
    md: customMQ(1280),
    lg: customMQ(1440),
    xl: customMQ(1800),
  },
  font: {
    size: {
      sm: "1.4rem",
      md: "1.6rem",
      lg: "2.4rem",
    },
    colors: {
      primary: "#000000",
      secondary: "#54585C",
      brand: "#1E88E5",
    },
  },
};

export type CustomTheme = typeof theme;
