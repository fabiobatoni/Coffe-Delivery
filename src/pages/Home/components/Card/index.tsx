import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  CoffeeImage,
  CoffeeOptionContainer,
  CoffeeOptionContent,
  CoffeePrice,
} from './styles'

import { Link } from 'react-router-dom'
import { coffeeDetails } from '../..'
import { useEffect, useState } from 'react'

export interface CoffeeDetails {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

interface CoffeeCardProps {
  coffeeDetails: CoffeeDetails

  coffeesOnCart: CoffeeDetails[]
  setCoffesOnCart: (coffee: ((state: coffeeDetails[]) => coffeeDetails[])) => void
}

export function CoffeeCard({ coffeeDetails, coffeesOnCart, setCoffesOnCart }: CoffeeCardProps) {
  const { description, image, price, tags, title, id } = coffeeDetails

  const [quantity, setQuantity] = useState(0)

  function addCoffeeToCart(coffeeDetails: CoffeeDetails) {
    const currentCoffeIndex = coffeesOnCart.findIndex((coffee) => coffee.id === coffeeDetails.id)

    if(currentCoffeIndex >= 0) {
      setCoffesOnCart((state) => state.map((coffee, index) => index === currentCoffeIndex ? {...coffeeDetails, quantity: coffee.quantity + 1 } : coffee))
    } else {
      setCoffesOnCart(state => [...state, {...coffeeDetails, quantity: 1}])
    }

  }

  function reduceCoffeFromCart(id: number) {
    const currentCoffeIndex = coffeesOnCart.findIndex((coffee) => coffee.id === id)

    if(currentCoffeIndex >= 0) {
      setCoffesOnCart((state) => state.map((coffee, index) => index === currentCoffeIndex ? {...coffeeDetails, quantity: coffee.quantity - 1 } : coffee).filter((coffee) => coffee.quantity >= 0))
    }
  }

  useEffect(() => {
    const currentCoffe = coffeesOnCart.find((coffee) => coffee.id === id)

    setQuantity(currentCoffe ? currentCoffe.quantity : 0)
  }, [id, coffeesOnCart])

  return (
    <CoffeeOptionContainer>
      <CoffeeImage>
        <img src={`coffees/${image}`} alt="" />
      </CoffeeImage>
      <CoffeeOptionContent>
        <div className="tags">
          {tags.map((tag) => (
            <div key={tag} className="tag">
              <p>{tag}</p>
            </div>
          ))}
        </div>

        <h2>{title}</h2>
        <p className="coffee-details">{description}</p>

        <CoffeePrice>
          <div className="price">
            <span>R$</span>
            <p>{price}</p>
          </div>
          <div className="quantity">
            <button onClick={() => reduceCoffeFromCart(id)} type="button" aria-label="Diminuir quantidade">
              <Minus size={16} />
            </button>
            <span>{quantity}</span>
            <button onClick={() => addCoffeeToCart(coffeeDetails)} type="button" aria-label="Aumentar quantidade">
              <Plus size={16} />
            </button>
          </div>
          <Link to="/checkout" className="shopping-cart">
            <ShoppingCart size={22} weight="fill" color="white" />
          </Link>
        </CoffeePrice>
      </CoffeeOptionContent>
    </CoffeeOptionContainer>
  )
}