import React from 'react';
import { View } from 'react-native';
import { WeatherInfos } from '../../organisms/WeatherInfos';
import { Content, Degrees, IconStyled, SmallText, Title } from './styles';

export const Weather = () => {
  return (
    <Content>
      <View>
        <IconStyled name="refresh" size={50} />
      </View>
      <Title>Lagos Nigeria</Title>
      <SmallText withMargin>22 de julho de 2021</SmallText>

      <IconStyled name="sunny" size={50} />
      <Degrees>26 c</Degrees>

      <WeatherInfos />
    </Content>
  );
};
