"use client";

import ButtonWithLoader from "@/components/button";
import {
  Container,
  Description,
  Error,
  Form,
  Input,
  InputCointainer,
  MaskedInput,
  StyledBack,
  Tip,
  Title,
} from "@/components/sharedstyles";
import operatorsList from "@/data/operators";
import { handleBlur, handleChange } from "@/utils/handling";
import { amountValidation, phoneValidation } from "@/utils/validation";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Pay() {
  const router = useRouter();
  const operator = operatorsList.find(
    (operator) => operator.slug == router.query.slug
  );
  const [phone, setPhone] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [amountTouched, setAmountTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submitPayment() {
    if (phoneValidation(phone) && amountValidation(amount)) {
      setLoading(true);
      setTimeout(() => {
        const apiResponse = Math.random() > 0.5 ? true : false;
        if (apiResponse) {
          setLoading(false);
          alert("Оплата прошла успешно");
          router.push("/");
        } else {
          setLoading(false);
          alert("Во время оплаты произошла ошибка, повторите попытку");
        }
      }, 1500);
    } else alert("Данные введены неправильно, невозможно провести оплату");
  }

  return (
    <Container>
      {/* Meta */}
      <Head>
        <title>{operator ? "Оплата " + operator.name : "Ошибка 404"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      {operator ? (
        <>
          <Title>{operator?.name}</Title>
          <Form>
            {/* Phone */}
            <InputCointainer>
              <Description>Номер телефона</Description>
              {!phoneValidation(phone) && phoneTouched && (
                <Error>Номер введен неверно</Error>
              )}
              <MaskedInput
                onBlur={(e) => handleBlur(e, setPhoneTouched)}
                onChange={(e) => handleChange(e, setPhone)}
                type="tel"
                mask="+7(999)999-99-99"
                value={phone}
                maskChar="_"
                placeholder="+7(___)___-__-__"
              />
            </InputCointainer>

            {/* Amount */}
            <InputCointainer>
              <Description>Сумма платежа</Description>
              {!amountValidation(amount) && amountTouched && (
                <Error>Cумма введена неверно</Error>
              )}
              <Input
                onBlur={(e) => handleBlur(e, setAmountTouched)}
                onChange={(e) => handleChange(e, setAmount)}
                value={amount}
                type="number"
                placeholder="100"
              />
              <Tip>Сумма от 1 до 1000 руб.</Tip>
            </InputCointainer>
            <InputCointainer>
              <ButtonWithLoader click={submitPayment} loading={loading} />
              {/* <button onClick={submitPayment}>{loading ? 'Загрузка' : 'Оплатить'}</button> */}
            </InputCointainer>
          </Form>
        </>
      ) : (
        <Title>Оператор not найден</Title>
      )}
      <Description>
        <StyledBack href="/">&larr; Вернуться</StyledBack>
      </Description>
    </Container>
  );
}