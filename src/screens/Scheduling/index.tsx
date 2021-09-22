import React, { ReactNode } from 'react';
import { BackButton } from '../../components/BackButton';



import { Container, Header } from './styles';


export default function Scheduling() {
  return (
    <Container>
     <Header>
      <BackButton onPress={()=>{}}></BackButton>
     </Header>
    </Container>
  );
};

