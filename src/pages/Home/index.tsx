import {Hero} from "./components/Hero"
import {
  CoffeeContainer,
  OurCoffeesContainer,
  HomeContainer
} from './styles'

export function Home() {

  return (
    <HomeContainer>
      <Hero />

      <CoffeeContainer>
        <h2>Nossos cafés</h2>

        <OurCoffeesContainer>
          
        </OurCoffeesContainer>
      </CoffeeContainer>

    </HomeContainer>
  )
}