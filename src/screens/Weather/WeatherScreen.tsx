import React from 'react';
import { Icon } from '../../components/atoms/Icon/Icon';
import { StyledText } from '../../components/atoms/typography';
import { Container, WeatherHeaderInfo, WeatherTypesContent } from './styles';

export function WeatherScreen() {
  return (
    <Container>
      <WeatherHeaderInfo>
        <WeatherTypesContent>
          <Icon name="location" />
          <StyledText>Chuva</StyledText>
        </WeatherTypesContent>
      </WeatherHeaderInfo>
    </Container>
  );
}
