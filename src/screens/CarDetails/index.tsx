import React, { ReactNode } from 'react';
import Acessory from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import ImageSilder from '../../components/ImageSilder';
import speedSvg from'../../assets/speed.svg';
import accelerationSvg from'../../assets/acceleration.svg';
import forceSvg from'../../assets/force.svg';
import gasolineSvg from'../../assets/gasoline.svg';
import exchangeSvg from'../../assets/exchange.svg';
import peopleSvg from'../../assets/people.svg';



import { Container, Header, CarImages,Content,Details,Description,Brand,Name,Rent, Period, Price, About, Acessories, Footer} from './styles';
import Button from '../../components/Button';


export default function CarDetails() {
  return (
    <Container>
     <Header>
      <BackButton onPress={()=>{}}></BackButton>
     </Header>
     <CarImages>
      <ImageSilder imagesUrl={['https://assets.webiconspng.com/uploads/2017/09/Chevrolet-PNG-Image-14318.png']} ></ImageSilder>
    </CarImages>
    <Content>
      <Details>
        <Description>
          <Brand>Lamborguini</Brand>
          <Name>Hurraca</Name>
        </Description>

        <Rent>
          <Period>ao dia</Period>
          <Price>RS 580</Price>
        </Rent>
      </Details>
      <Acessories>
        <Acessory name="380KM/h" icon={speedSvg}></Acessory>
        <Acessory name="3.2s" icon={accelerationSvg}></Acessory>
        <Acessory name="800HP" icon={forceSvg}></Acessory>
        <Acessory name="Gasolina" icon={gasolineSvg}></Acessory>
        <Acessory name="Auto" icon={exchangeSvg}></Acessory>
        <Acessory name="2 pessoas" icon={peopleSvg}></Acessory>
      </Acessories>
      <About>
        lorem ipsulum ijasidjiasjd aisjdiasjid asidji asjdij aeghygea ausueahea uahueahue 
      </About>
     
    </Content>
      <Footer>
        <Button title="Confirmar" ></Button>
      </Footer>
    </Container>
  );
};


