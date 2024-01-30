import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import styled from "styled-components";

const P = styled.p`
  background-color: red;
`;

export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">&larr; Go Back</Link>
        </Description>
        <P>asd</P>
      </Main>
    </Container>
  );
}
