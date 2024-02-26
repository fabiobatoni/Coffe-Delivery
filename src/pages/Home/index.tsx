import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import logoHome from '../../assets/HomeLogo.svg';
import { HomeContainer, InfoContainer, SubTitlesContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <InfoContainer>
        <h1>
        Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        
        <SubTitlesContainer>
          <span>
            <ShoppingCartSimple size={24} />
            Compra simples e segura
          </span>
          <span>
            <Timer size={24} />
            Entrega rápida e rastreada
          </span>
          <span>
            <Package size={24} />
            Embalagem mantém o café intacto
          </span>
          <span>
            <Coffee size={24} />
            O café chega fresquinho até você
          </span>
        </SubTitlesContainer>

      </InfoContainer>

      <img src={logoHome} alt=""></img>
    </HomeContainer>
  )
}