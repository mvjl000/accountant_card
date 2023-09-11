import { accountantsAtom } from "api";
import { Card } from "components/Card/Card";
import { Wrapper } from "components/CardsList/CardsList.styles";
import { useAtom } from "jotai";

export const CardsList = () => {
  const [data] = useAtom(accountantsAtom);

  return (
    <Wrapper>
      {data.results.map((accountant) => (
        <Card key={accountant.login.uuid} accountant={accountant} />
      ))}
    </Wrapper>
  );
};
