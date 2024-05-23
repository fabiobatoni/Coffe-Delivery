import { AddressDetails } from './components/AddressDetails';
import { OrderDetails } from './components/OrderDetails';
import { PaymentOptions } from './components/PaymentOptions';
import {
  AddressAndPaymentContainer,
  CheckoutContainer,
  OrderContainer,
} from './styles'

function handleSubmit() {
  alert('teste');
}

export function Checkout() {
  return(
    <form onSubmit={handleSubmit}>
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