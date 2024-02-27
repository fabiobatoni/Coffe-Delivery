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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  margin-top: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 6px;
      border-radius: 999px;
    }
  }

`