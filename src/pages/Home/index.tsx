import { coffees } from "../../mock/coffee"
import { CoffeeCard } from "./components/Card"
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
          {coffees.map((coffee) => (
            <CoffeeCard coffeeDetails={coffee} key={coffee.id} />
          ))}
        </OurCoffeesContainer>
      </CoffeeContainer>

    </HomeContainer>
  )
}