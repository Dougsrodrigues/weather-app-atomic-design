import React, { FC } from 'react';
import { ArrayWeather } from '../../templates/WeatherListNamesHelper';
import { IconStyled, Text, WeatherTypesContent } from './styles';

interface WeatherTypesProps {
  item: ArrayWeather;
}
export const WeatherTypes: FC<WeatherTypesProps> = ({ item }) => {
  return (
    <WeatherTypesContent>
      <IconStyled name={item.icon} size={30} />
      <Text>{item.weather}</Text>
    </WeatherTypesContent>
  );
};
