import { Minus, Plus, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

import {
  CoffeeCardContainer,
  CoffeeCardDetails,
  AddOrRemoveItem,
  RemoveItem,
  Divider,
  ValuesDetails,
  ConfirmOderButton,
  OrderInfosContainer,
  ConfirmContainer,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'


export function OrderDetails() {
  const theme = useTheme()

  const { addCoffeeToCart, reduceCoffeFromCart, coffeesOnCart } = useContext(CartContext)

  return (
    <OrderInfosContainer>
      {coffeesOnCart.map(coffee => (
          <CoffeeCardContainer key={coffee.id}>
          <CoffeeCardDetails>
            <div className="coffee-box">
              <img src={`coffees/${coffee.image}`} alt="" />
              <div className="details">
                <p>{coffee.title}</p>
                <div className="actions">
                  <AddOrRemoveItem>
                    <button onClick={() => reduceCoffeFromCart(coffee.id)} type="button" aria-label="Diminuir quantidade">
                      <Minus size={14} color={theme?.purple} />
                    </button>{' '}
                    {coffee.quantity}
                    <button onClick={() => addCoffeeToCart(coffee)} type="button" aria-label="Aumentar quantidade">
                      <Plus size={14} color={theme?.purple} />
                    </button>
                  </AddOrRemoveItem>
                  <RemoveItem>
                    <Trash size={14} color={theme?.purple} /> remover
                  </RemoveItem>
                </div>
              </div>
            </div>

            <div className="price">
              <p>{coffee.price}</p>
            </div>
          </CoffeeCardDetails>

          <Divider />
        </CoffeeCardContainer>
      ))}
      <ConfirmContainer>
        <ValuesDetails>
          <div>
            <p className="heading">Total de itens</p>
            <p>R$ 22,50</p>
          </div>
          <div className="heading">
            <p>Entrega</p>
            <p>R$ 0</p>
          </div>
          <div>
            <h3>Total</h3>
            <h3>R$ 26,00</h3>
          </div>
        </ValuesDetails>

        <ConfirmOderButton type="submit">confirmar pedido</ConfirmOderButton>
      </ConfirmContainer>
    </OrderInfosContainer>
  )
}