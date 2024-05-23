import styled from 'styled-components'

export const AddressContainer = styled.div`
  height: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const HeadingTitle = styled.div`
  display: flex;
  gap: 8px;

  h3 {
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 130%;
  }

  .subtitle {
    color: ${({ theme }) => theme['base-text']};
    font-size: 14px;
    line-height: 130%;
  }
`

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FlexAddressForm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

interface InputProps {
  width?: number
}

export const InputContainer = styled.div<InputProps>`
  height: fixed;
  width: 100%;
  max-width: ${(props) => props.width}px;
  position: relative;

  span {
    position: absolute;
    display: block;
    color: ${(props) => props.theme['base-red']};
    font-size: 12px;
    font-style: italic;
  }
`

export const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: none;
  border-radius: 4px;
  padding: 12px;
  width: 100%;

  border: 1px solid ${(props) => props.theme['base-button']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
  &:focus {
    box-shadow: none;
    outline: none;
  }
`
export const BaseSelect = styled.select`
  appearance: none;
  background-color: ${(props) => props.theme['base-input']};
  border: none;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  height: 44px;

  border: 1px solid ${(props) => props.theme['base-button']};

  &:focus {
    box-shadow: none;
    outline: none;
  }

  option {
    font-size: 18px;
    color: ${(props) => props.theme['base-label']};
  }
`