import React from 'react';
import {
  useFonts,
  RobotoSlab_300Light,
  RobotoSlab_500Medium,
  RobotoSlab_400Regular,
  RobotoSlab_600SemiBold,
} from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import styled, { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import themes from '../styles';
import { StyledText } from '../components/atoms/typography';
import { Icon } from '../components/atoms/Icon/Icon';

import weather from './assets/fonts/weather.ttf';

export default function App() {
  const deviceTheme = useColorScheme();
  const { typography } = themes;
  const theme = themes[deviceTheme] || themes.dark;

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_300Light,
    RobotoSlab_600SemiBold,
    weather,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={{ ...typography, ...theme }}>
      <SafeAreaProvider>
        <Container>
          <StyledText family="semiBold" size="large">
            Olá
          </StyledText>
          <Icon name="location" />
        </Container>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
