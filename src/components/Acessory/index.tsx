import React, { ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';



import { Container, Name } from './styles';

interface Proprs {
  name: string;
  icon: React.FC<SvgProps>
}

export default function Acessory({name, icon: Icon}: Proprs) {
  return (
    <Container>
     <Icon width={32} height={32}></Icon>
     <Name>{name}</Name>
    </Container>
  );
};


