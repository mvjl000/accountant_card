import {
  Wrapper,
  CardImage,
  CardHeader,
  NameWrapper,
  DetailsWrapper,
} from "components/Card/Card.styles";
import { StyledButton } from "components/ui.styles";

export const Card = () => {
  return (
    <Wrapper>
      <CardHeader>
        <CardImage>
          <img
            src={"https://randomuser.me/api/portraits/med/women/80.jpg"}
            alt="Some person"
          />
        </CardImage>
        <NameWrapper>
          <p className="label">Twoja księgowa</p>
          <p className="name">Dominika Zuber</p>
        </NameWrapper>
      </CardHeader>
      <DetailsWrapper>
        <div>
          <p className="label">E-mail</p>
          <p className="value">dominika.zuber@infakt.pl</p>
        </div>
        <div>
          <p className="label">Telefon</p>
          <p className="value">+48 123 456 789</p>
        </div>
        <div>
          <p className="label">Średnia cena netto usługi / m-c</p>
          <p className="value">
            350,00 <span className="currency">PLN</span>
          </p>
        </div>
      </DetailsWrapper>
      <StyledButton as="a" href="/accountant">
        Dowiedz się więcej
      </StyledButton>
    </Wrapper>
  );
};
