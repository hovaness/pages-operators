import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  List,
} from "@/components/sharedstyles";
import Cards from "@/components/cards";
import operatorsList from "@/data/operators";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>OnlinePay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Main>
        <Title>Оплата операторов</Title>

        <Description>Выберите своего оператора</Description>

        {/* <Cards /> */}
        <List>
          {operatorsList.map((operator) => (
            <Cards
              key={operator.slug}
              name={operator.name}
              slug={operator.slug}
              color={operator.color}
            />
          ))}
        </List>
      </Main>
    </Container>
  );
}