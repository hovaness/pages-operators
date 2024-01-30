import styled from "styled-components";
import Link from "next/link";
import { Operator } from "@/data/operators";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  width: 220px;

  @media (max-width: 835px) {
    margin: 0 auto;
  }

  @media (max-width: 680px) {
    width: 160px;
  }
`;

const Card = styled.div<{ $color: string }>`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border-radius: 20px;
  border: 2px solid white;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: ${(props) => props.$color};
    border-color: ${(props) => props.$color};
  }

  @media (max-width: 680px) {
    padding: 1rem;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;

  @media (max-width: 680px) {
    font-size: 1rem;
  }
`;

export default function Cards(operator: Operator) {
  return (
    <FlexContainer>
      <Card $color={operator.color}>
        <StyledLink href={`/pay/${operator.slug}`}>
          {operator.name} &rarr;
        </StyledLink>
      </Card>
    </FlexContainer>
  );
}
