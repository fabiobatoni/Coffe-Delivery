import { useState } from "react"
import { coffees } from "../../mock/coffee"
import { CoffeeCard, CoffeeDetails } from "./components/Card"
import {Hero} from "./components/Hero"
import {
  CoffeeContainer,
  OurCoffeesContainer,
  HomeContainer
} from './styles'

export interface coffeeDetails {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

export function Home() {

  const [coffeesOnCart, setCoffesOnCart] = useState<CoffeeDetails[]>([]) 

  return (
    <HomeContainer>
      <Hero />

      <CoffeeContainer>
        <h2>Nossos cafés</h2>

        <OurCoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard 
             coffeesOnCart={coffeesOnCart}
             setCoffesOnCart={setCoffesOnCart}
             coffeeDetails={coffee} 
             key={coffee.id} />
          ))}
        </OurCoffeesContainer>
      </CoffeeContainer>

    </HomeContainer>
  )
}