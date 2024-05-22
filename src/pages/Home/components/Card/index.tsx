import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  CoffeeImage,
  CoffeeOptionContainer,
  CoffeeOptionContent,
  CoffeePrice,
} from './styles'

import { Link } from 'react-router-dom'

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
}

export function CoffeeCard({ coffeeDetails }: CoffeeCardProps) {
  const { description, image, price, tags, title, id } = coffeeDetails

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
            <button type="button" aria-label="Diminuir quantidade">
              <Minus size={16} />
            </button>
            <span>{0}</span>
            <button type="button" aria-label="Aumentar quantidade">
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