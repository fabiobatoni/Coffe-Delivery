import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";

import { useTheme } from 'styled-components'

import {
  PaymentOptionsContainer,
  HeadingTitle,
  PaymentMethodsContainer,
  PaymentMethodButton,
  ErrorTest,
} from './styles'


export function PaymentOptions() {
  const theme = useTheme()


  return(
    <PaymentOptionsContainer>
    <HeadingTitle className="heading">
      <CurrencyDollar size={22} color={theme?.purple} />
      <div>
        <h3>Pagamento</h3>
        <p className="subtitle">
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </p>
      </div>
    </HeadingTitle>

    <PaymentMethodsContainer>
      <PaymentMethodButton
        htmlFor="creditCard"
        
      >
        <CreditCard color={theme?.purple} />
        <input
          id="creditCard"
          type="radio"
         
          value="creditCard"
        />
        <p>Cartão de crédito</p>
      </PaymentMethodButton>

      <PaymentMethodButton
        htmlFor="debitCart"
        
      >
        <Bank color={theme?.purple} />

        <input
          id="debitCart"
          type="radio"
         
          value="debitCart"
        />
        <p>Cartão de débito</p>
      </PaymentMethodButton>

      <PaymentMethodButton
        htmlFor="cash"
        
        
      >
        <Money color={theme?.purple} />

        <input
          id="cash"
          type="radio"
         
          value="cash"
        />
        <p>Dinheiro</p>
      </PaymentMethodButton>
    </PaymentMethodsContainer>

    
  </PaymentOptionsContainer>
  )
}