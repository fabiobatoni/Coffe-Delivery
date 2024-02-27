import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import logoHome from '../../assets/HomeLogo.svg';
import { HomeContainer, InfoContainer, SubTitlesContainer } from './styles';
import { useTheme } from 'styled-components';

export function Home() {

  const theme = useTheme()

  return (
    <div>
    <HomeContainer>
      <InfoContainer>
        <h1>
        Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        
        <SubTitlesContainer>
          <div>
            <ShoppingCartSimple 
              size={32} 
              weight="fill"
              color={theme.background}
              style={{ backgroundColor: theme['yellow-dark'] }}
            />
            <span>Compra simples e segura</span>
          </div>
         
          <div>
            <Timer 
              size={32}
              weight="fill"
              color={theme.background}
              style={{ backgroundColor: theme['yellow'] }} 
            />
            <span>Entrega rápida e rastreada</span>
          </div>
          
          <div>
            <Package 
              size={32} 
              weight="fill"
              color={theme.background}
              style={{ backgroundColor: theme['base-text'] }}
            />
            <span>Embalagem mantém o café intacto</span>
          </div>

          <div>
            <Coffee 
              size={32} 
              weight="fill"
              color={theme.background}
              style={{ backgroundColor: theme['purple'] }}
            />
            <span>O café chega fresquinho até você</span>
          </div>
        </SubTitlesContainer>

      </InfoContainer>

      <img src={logoHome} alt=""></img>
    </HomeContainer>

      <div>
        <h2>Nossos cafés</h2>

        <div>
          Card
        </div>
      </div>

    </div>
  )
}