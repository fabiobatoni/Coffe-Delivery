import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  margin: 5rem auto;
`

export const CoffeeContainer = styled.div`
  margin-top: 2rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }
`

export const OurCoffeesContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 20px;
`

