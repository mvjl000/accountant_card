import { accountantsAtom } from "api";
import { Card } from "components/Card/Card";
import { Wrapper } from "components/CardsList/CardsList.styles";
import { useAtom } from "jotai";

export const CardsList = () => {
  const [data] = useAtom(accountantsAtom);

  console.log("DATA>>>", data);

  return (
    <Wrapper>
      {Array.from(Array(10).keys()).map((item) => (
        <Card key={item} />
      ))}
    </Wrapper>
  );
};
