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


export function OrderDetails() {
  const theme = useTheme()

  return (
    <OrderInfosContainer>
      <CoffeeCardContainer>
        <CoffeeCardDetails>
          <div className="coffee-box">
            <img src={`coffees/traditional-express.png`} alt="" />
            <div className="details">
              <p>Expresso Tradicional</p>
              <div className="actions">
                <AddOrRemoveItem>
                  <button type="button" aria-label="Diminuir quantidade">
                    <Minus size={14} color={theme?.purple} />
                  </button>{' '}
                  2
                  <button type="button" aria-label="Aumentar quantidade">
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
            <p>R$ 12.99</p>
          </div>
        </CoffeeCardDetails>

        <Divider />
      </CoffeeCardContainer>

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