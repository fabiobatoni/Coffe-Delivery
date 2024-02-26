import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
 
`

export const InfoContainer = styled.div`
  padding: 1rem;
  margin-top: 1rem;

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme["base-title"]};
    font-weight: bold;
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const SubTitlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
  width: 100%;

  span {
    width: 48%; /* Defina a largura desejada para cada item */
    margin-bottom: 10px; /* Espaçamento entre os itens */
  }

`