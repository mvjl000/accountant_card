import { accountantsAtom, resultsPerPageAtom } from "api";
import { Card } from "components/Card/Card";
import { CardSkeleton } from "components/Card/Card.styles";
import { Wrapper } from "components/CardsList/CardsList.styles";
import { useAtom } from "jotai";

export const CardsList = () => {
  const [data] = useAtom(accountantsAtom);
  const [count] = useAtom(resultsPerPageAtom);

  if (data.results.length < 1) {
    return (
      <Wrapper>
        {Array.from(Array(count).keys()).map(() => (
          <CardSkeleton />
        ))}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {data.results.map((accountant) => (
        <Card key={accountant.login.uuid} accountant={accountant} />
      ))}
    </Wrapper>
  );
};
