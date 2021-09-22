import  React,{ ReactNode } from 'react';

import { StatusBar, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, HeaderContent, TotalCars, CarList  } from './styles';
import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car';


export default function Home() {
 
 
  const carDataOne = {
    brand: 'Chevrolet',
    name: 'Corvette z208',
    rent: {
      period: 'Ao dia',
      price: 200
    },
    thumbnail: 'https://assets.webiconspng.com/uploads/2017/09/Chevrolet-PNG-Image-14318.png'
  }
  const carDataTwo = {
    brand: 'Tesla',
    name: 'Tesla Model S plaid',
    rent: {
      period: 'SEMANA',
      price: 350
    },
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCWQhY4FP2HOhE66QdzskrlfCkJLdF60RzMpjQD-_J3lC7yv2VE5E0VLVhb8dMv-NhY8&usqp=CAU'
  }
  const carDataThree = {
    brand: 'Ford',
    name: 'Fusion AWD 2014',
    rent: {
      period: 'Ao dia',
      price: 180
    },
    thumbnail: 'https://lh3.googleusercontent.com/proxy/GBdnZ9GV7OsOgiBQsKEesTtM4Ldf6wbamAP6seLooT1N0e7Y06VZoFDgp00KjEm4RF7_6vdLMl94VBejwR6pr__kfOi5Fwt5rd2yW3QFamFDMUFz3hftJkN0cJyeV21Dix3ipCBw'
  }
  const cars = [carDataOne, carDataTwo, carDataThree]

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
       />
      <Header>
        <HeaderContent>
        <Logo width={RFValue(108)} height={RFValue(12)}/>
        <TotalCars>
          Total de 12 Carros
        </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={cars}
        keyExtractor={item=> item.brand}
        renderItem={({item})=>  <Car data={item} ></Car>}
      />
     
    
      
    </Container>
  );
};


