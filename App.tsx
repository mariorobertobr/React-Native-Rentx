
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium
} from '@expo-google-fonts/inter'
import theme from './src/styles/theme'
import {
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold

} from '@expo-google-fonts/archivo'

import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Home from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import CarDetails from './src/screens/CarDetails'
import Scheduling from './src/screens/Scheduling';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading></AppLoading>
  }


  return (
 
   <ThemeProvider theme={theme}>
      
      <Scheduling/>
    </ThemeProvider>
    
  );
}


