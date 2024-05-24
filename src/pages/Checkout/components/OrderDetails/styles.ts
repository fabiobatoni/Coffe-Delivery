import styled from 'styled-components'

export const OrderInfosContainer = styled.div`
  width: 100%;
  max-width: 448px;

  min-height: 498px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['background']};
`
export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 368px;

  &:nth-child(n + 2) {
    margin-top: 24px;
  }
`

export const Divider = styled.hr`
  align-self: stretch;
  border: 1px solid ${(props) => props.theme['base-button']};
  width: 100%;

  margin-top: 24px;
`

export const CoffeeCardDetails = styled.div`
  width: 100%;
  max-width: 368px;
  height: auto;
  max-height: 80px;

  display: flex;
  justify-content: space-between;
  gap: 20px;

  padding: 8px 4px;

  .coffee-box {
    display: flex;
    /* justify-content: space-between; */
    gap: 20px;
    img {
      width: 64px;
      height: 64px;
    }

    .details {
      p {
        color: ${(props) => props.theme['base-subtitle']};
      }

      .actions {
        display: flex;

        justify-content: center;
        margin-top: 8px;

        gap: 4px;
      }
    }
  }
  .price {
    p {
      font-size: 16px;
      font-weight: 700;
    }
  }
`

export const BaseButtonAction = styled.button`
  border-radius: 6px;
  height: 32px;
  padding: 8px;
  background-color: ${(props) => props.theme['base-button']};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-transform: uppercase;
  font-size: 12px;
  color: ${(props) => props.theme['base-text']};
`

export const AddOrRemoveItem = styled.div`
  border-radius: 6px;
  height: 32px;
  padding: 8px;
  background-color: ${(props) => props.theme['base-button']};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  button {
    background: none;
    display: flex;
    align-items: center;
  }
`
export const RemoveItem = styled(BaseButtonAction)``

export const ConfirmContainer = styled.div`
  width: 100%;
`

export const ValuesDetails = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;

    .heading {
      font-size: 14px;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
    }
  }
`

export const ConfirmOderButton = styled.button`
  width: 100%;
  padding: 12px 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};

  text-decoration: none;
  margin-top: 24px;

  text-align: center;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;

  font-size: 14px;
  font-weight: 700;
`