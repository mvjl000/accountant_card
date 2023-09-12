import { Fragment } from "react";
import { resultsPerPageAtom } from "atoms";
import { useAtom } from "jotai";
import { useInfiniteAccountants } from "useInfiniteAccountants";
import { Card } from "components/Card/Card";
import { CardSkeleton } from "components/Card/Card.styles";
import { Wrapper } from "components/CardsList/CardsList.styles";
import { ErrorMessage } from "components/ui.styles";

const renderNSkeletons = (num: number) =>
  Array.from(Array(num).keys()).map((item) => <CardSkeleton key={item} />);

export const CardsList = () => {
  const [resultsPerPage] = useAtom(resultsPerPageAtom);
  const { data, isLoading, isError, isFetchingNextPage } =
    useInfiniteAccountants(resultsPerPage);

  if (isError) {
    return <ErrorMessage>Upssss, nie zobaczysz księgowych :/</ErrorMessage>;
  }

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
