import { Card } from "components/Card/Card";
import { Wrapper } from "components/CardsList/CardsList.styles";

export const CardsList = () => {
  return (
    <Wrapper>
      {Array.from(Array(10).keys()).map((item) => (
        <Card key={item} />
      ))}
    </Wrapper>
  );
};
