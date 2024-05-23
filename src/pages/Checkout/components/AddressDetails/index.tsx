import {
  AddressContainer,
  BaseInput,
  AddressFormContainer,
  FlexAddressForm,
  HeadingTitle,
  InputContainer,
  BaseSelect,
} from './styles'


export function AddressDetails() {
  return (
    <AddressContainer>
      <HeadingTitle className="heading">
       
        <div>
          <h3>Endereço de Entrega</h3>
          <p className="subtitle">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </HeadingTitle>

      <AddressFormContainer>
        <InputContainer width={200}>
          <BaseInput
            id="cep"
            type="text"
            placeholder="CEP"
            
          />
         
        </InputContainer>

        <InputContainer>
          <BaseInput
            id="street"
            type="text"
            placeholder="Rua"
           
          />
         
        </InputContainer>
        <FlexAddressForm>
          <InputContainer width={200}>
            <BaseInput
              placeholder="Número"
             
            />
           
          </InputContainer>
          <InputContainer>
            <BaseInput placeholder="Complemento"  />
            
          </InputContainer>
        </FlexAddressForm>
        <FlexAddressForm>
          <InputContainer width={200}>
            <BaseInput placeholder="Bairro"  />
           
          </InputContainer>
          <InputContainer>
            <BaseInput placeholder="Cidade"  />
            
          </InputContainer>
          <InputContainer width={60}>
            <BaseSelect aria-label="Estados UF"  id="uf">
              <option value="" disabled defaultValue="UF">
                UF
              </option>
              
            </BaseSelect>
           
          </InputContainer>
        </FlexAddressForm>
      </AddressFormContainer>
    </AddressContainer>
  )
}