import { AddressDetails } from './components/AddressDetails';
import { OrderDetails } from './components/OrderDetails';
import { PaymentOptions } from './components/PaymentOptions';
import {
  AddressAndPaymentContainer,
  CheckoutContainer,
  OrderContainer,
} from './styles'



export function Checkout() {
  return(
    <form>
    <CheckoutContainer>
      
        <AddressAndPaymentContainer>
          <h2>Complete seu pedido</h2>

          <AddressDetails />
          <PaymentOptions />
        </AddressAndPaymentContainer>
        <OrderContainer>
          <h2>Cafés selecionados</h2>

          <OrderDetails />
        </OrderContainer>
     
    </CheckoutContainer>
  </form>
  )
}