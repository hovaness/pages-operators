import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  border: none;
  margin-top: 1.5vh;
  width: 100px;
  background-color: #ff6c00;
  border-radius: 0.375rem;
  text-align: center;
  color: white;
  line-height: 1.5;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px 10px;
  box-sizing: border-box;

  @media (max-width: 680px) {
    font-size: 1rem;
  }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  line-height: 1.5;
  font-size: 1.2rem;
`;

type Bprops = {
  loading: boolean;
  click: any;
};

export default function ButtonWithLoader(props: Bprops) {
  return (
    <>
      <StyledButton onClick={props.click}>
        {props.loading ? <Rotate>☕</Rotate> : "Оплатить"}
      </StyledButton>
    </>
  );
}
