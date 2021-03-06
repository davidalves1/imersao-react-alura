import styled from "styled-components";
import db from "../db.json";

const BackgroundImage = styled.div`
  flex: 1;
  background-image: url(${db.bg1});
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>TESTE</QuizContainer>
    </BackgroundImage>
  );
}
