import React,{ ReactNode } from 'react';



import { Container, Title } from './styles';
interface Props{
  title: string;
  color?: string;
  
}


export default function Button({ title, color, ...rest}: Props) {
  return (
    <Container {...rest} color={color}>
     <Title>{title}</Title>
    </Container>
  );
};

