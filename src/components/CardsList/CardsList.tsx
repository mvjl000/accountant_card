import { Card } from "components/Card/Card";
import { CardSkeleton } from "components/Card/Card.styles";
import { Wrapper } from "components/CardsList/CardsList.styles";
import { Fragment } from "react";
import { useInfiniteAccountants } from "useInfiniteAccountants";
import { useAtom } from "jotai";
import { resultsPerPageAtom } from "atoms";

const renderNSkeletons = (num: number) =>
  Array.from(Array(num).keys()).map((item) => <CardSkeleton key={item} />);

export const CardsList = () => {
  const [resultsPerPage] = useAtom(resultsPerPageAtom);
  const { data, isLoading, isFetchingNextPage } =
    useInfiniteAccountants(resultsPerPage);

  if (isLoading) {
    return <Wrapper>{renderNSkeletons(resultsPerPage)}</Wrapper>;
  }

  return (
    <>
      <Wrapper>
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.results.map((accountant) => (
              <Card key={accountant.login.uuid} accountant={accountant} />
            ))}
          </Fragment>
        ))}
        {isFetchingNextPage && renderNSkeletons(resultsPerPage)}
      </Wrapper>
    </>
  );
};
