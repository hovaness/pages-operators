import Link from "next/link";
import styled from "styled-components";
import InputMask from "react-input-mask";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 0 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  @media (max-width: 1360px) {
    font-size: 3.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 680px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;

  @media (max-width: 1360px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5vh;
  flex-wrap: wrap;
`;

const Form = styled.div`
  margin-top: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 28rem;
  height: auto;
  background-color: #00675c;
  border-radius: 0.375rem;
  padding: 1rem;
  max-height: 500vh;

  @media (max-width: 640px) {
    width: 20rem;
  }
`;

const InputCointainer = styled.div`
  margin-top: 0.5rem;
  text-align: center;
`;

const StyledBack = styled(Link)`
  &:hover {
    color: #ff6c00;
  }
`;

const Input = styled.input`
  border: none;
  background-color: #00675c;
  border-bottom: 2px solid #ffffff;
  color: white;
  text-align: center;
  padding: 0.6rem;
  line-height: 1.5;
  font-size: 1.2rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover,
  active,
  focus {
    border-bottom: 2px solid #ff6c00;
  }
  ::placeholder {
    color: white;
  }
`;

const MaskedInput = styled(InputMask)`
  border: none;
  background-color: #00675c;
  border-bottom: 2px solid #ffffff;
  color: white;
  text-align: center;
  padding: 0.6rem;
  line-height: 1.5;
  font-size: 1.2rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover,
  active,
  focus {
    border-bottom: 2px solid #ff6c00;
  }
`;

const Tip = styled.small`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Error = styled.p`
  color: rgb(248 113 113);
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
`;

export {
  Container,
  Main,
  Title,
  Description,
  List,
  Form,
  InputCointainer,
  StyledBack,
  Input,
  Tip,
  MaskedInput,
  Error,
};
