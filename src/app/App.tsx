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

import themes from '../styles';
import { StyledText } from '../components/atoms/typography';

export default function App() {
  const deviceTheme = useColorScheme();
  const { typography } = themes;
  const theme = themes[deviceTheme] || themes.dark;

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_300Light,
    RobotoSlab_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={{ ...typography, ...theme }}>
      <Container>
        <StyledText>Olá</StyledText>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
