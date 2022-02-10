import React from 'react';
import { Weather } from '../../components/templates/Weather';
import { WeatherListNamesHelper } from '../../components/templates/WeatherListNamesHelper';
import { Container } from './styles';

export function WeatherScreen() {
  return (
    <Container>
      <WeatherListNamesHelper />

      <Weather />
    </Container>
  );
}
