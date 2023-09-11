import { Card } from "components/Card/Card";
import { CardSkeleton } from "components/Card/Card.styles";
import { Wrapper } from "components/CardsList/CardsList.styles";
import { Fragment } from "react";
import { useInfiniteAccountants } from "useInfiniteAccountants";

const renderNSkeletons = (num: number) =>
  Array.from(Array(num).keys()).map(() => <CardSkeleton />);

export const CardsList = () => {
  const { data, isLoading, isFetchingNextPage } = useInfiniteAccountants();

  if (isLoading) {
    return <Wrapper>{renderNSkeletons(5)}</Wrapper>;
  }

  return (
    <Wrapper>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.results.map((accountant) => (
            <Card key={accountant.login.uuid} accountant={accountant} />
          ))}
        </Fragment>
      ))}
      {isFetchingNextPage && renderNSkeletons(5)}
    </Wrapper>
  );
};
