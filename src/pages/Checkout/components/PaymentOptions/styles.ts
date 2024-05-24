import styled from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  height: 100%;

  padding: 2.5rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['background']};
`

export const HeadingTitle = styled.div`
  display: flex;
  gap: 8px;

  h3 {
    font-size: 16px;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  .subtitle {
    color: ${(props) => props.theme['base-text']};
    font-size: 14px;
    line-height: 130%;
  }
`

export const PaymentMethodsContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
`

interface PaymentMethodButtonProps {
  checked?: boolean
  error_border?: number
}

export const PaymentMethodButton = styled.label<PaymentMethodButtonProps>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.error_border && `border: 1px solid ${props.theme['base-red']};`}

  gap: 12px;
  background-color: ${(props) =>
    props.checked ? props.theme['purple-light'] : props.theme['base-button']};

  cursor: pointer;

  border-radius: 6px;
  padding: 16px;

  &:hover {
    background-color: ${(props) => props.theme['purple-light']};
  }

  p {
    font-size: 12px;
    text-transform: uppercase;
  }

  input[type='radio'] {
    display: none;
  }
`
export const ErrorTest = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme['base-red']};
  font-style: italic;
  margin-top: 6px;
`