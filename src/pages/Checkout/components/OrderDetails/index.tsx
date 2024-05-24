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
  const { addCoffeeToCart, reduceCoffeFromCart, coffeesOnCart } = useContext(CartContext)

  const theme = useTheme()

  const delivery = 5.5
  const formatedDeliveryPrice = formatCurrency(delivery)

  const totalItemsValue = coffeesOnCart.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.price * currentValue.quantity) 
  }, 0)

  const formattedTotalPrice = formatCurrency(totalItemsValue)

  const totalValue = formatCurrency(totalItemsValue + delivery)

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
              <p>{formatCurrency(coffee.price)}</p>
            </div>
          </CoffeeCardDetails>

          <Divider />
        </CoffeeCardContainer>
      ))}
      <ConfirmContainer>
        <ValuesDetails>
          <div>
            <p className="heading">Total de itens</p>
            <p>R$ {formattedTotalPrice} </p>
          </div>
          <div className="heading">
            <p>Entrega</p>
            <p>R$ {formatedDeliveryPrice}</p>
          </div>
          <div>
            <h3>Total</h3>
            <h3>R$ {totalValue}</h3>
          </div>
        </ValuesDetails>

        <ConfirmOderButton type="submit">confirmar pedido</ConfirmOderButton>
      </ConfirmContainer>
    </OrderInfosContainer>
  )
}

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2})
}