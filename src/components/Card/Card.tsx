import { AccountantType } from "api";
import {
  Wrapper,
  CardImage,
  CardHeader,
  NameWrapper,
  DetailsWrapper,
} from "components/Card/Card.styles";
import { ButtonLink } from "components/ui.styles";
import { useRef } from "react";

const generateRandomPrice = () => {
  const MIN = 100;
  const MAX = 500;

  return Math.floor(Math.random() * (MAX - MIN) + MIN);
};

type CardProps = {
  accountant: AccountantType;
};

export const Card = ({ accountant }: CardProps) => {
  const price = useRef(generateRandomPrice());

  const { name, email, cell, gender } = accountant;
  const accountantName = `${name.first} ${name.last}`;

  return (
    <Wrapper>
      <CardHeader>
        <CardImage>
          <img src={accountant.picture.medium} alt={accountantName} />
        </CardImage>
        <NameWrapper>
          <p className="label">
            {gender === "female" ? "Twoja księgowa" : "Twój księgowy"}
          </p>
          <p className="name">{accountantName}</p>
        </NameWrapper>
      </CardHeader>
      <DetailsWrapper>
        <div>
          <p className="label">E-mail</p>
          <p className="value">{email}</p>
        </div>
        <div>
          <p className="label">Telefon</p>
          <p className="value">{cell}</p>
        </div>
        <div>
          <p className="label">Średnia cena netto usługi / m-c</p>
          <p className="value">
            {price.current},00 <span className="currency">PLN</span>
          </p>
        </div>
      </DetailsWrapper>
      <ButtonLink href={`/accountant/${accountant.login.uuid}`}>
        Dowiedz się więcej
      </ButtonLink>
    </Wrapper>
  );
};
