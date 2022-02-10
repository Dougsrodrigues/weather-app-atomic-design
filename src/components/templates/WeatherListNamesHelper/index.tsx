import React from 'react';
import { BoxShadow } from '../../atoms/BoxShadow';
import { WeatherTypes } from '../../organisms/WeatherTypes';
import { WeatherHeaderInfoList } from './styles';

export interface ArrayWeather {
  id: number;
  weather: string;
  icon: string;
}

export const WeatherListNamesHelper = () => {
  const arrayWeather: ArrayWeather[] = [
    {
      id: 1,
      weather: 'Dia Ensolarado',
      icon: 'sunny',
    },
    {
      id: 2,
      weather: 'Noite Sem Nuvens',
      icon: 'night',
    },
    {
      id: 3,
      weather: 'Noite com nuvens',
      icon: 'cloud-night',
    },
    {
      id: 4,
      weather: 'Dia com chuvas',
      icon: 'sun-rain',
    },
    {
      id: 5,
      weather: 'Noite com chuvas',
      icon: 'night-rain',
    },
    {
      id: 6,
      weather: 'Chuvas fortes',
      icon: 'rain-thunder',
    },
  ];

  const keyExtractor = ({ id }: ArrayWeather): string => id.toString();

  return (
    <BoxShadow>
      <WeatherHeaderInfoList<ArrayWeather>
        horizontal
        showsHorizontalScrollIndicator={false}
        data={arrayWeather}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <WeatherTypes item={item} />}
      />
    </BoxShadow>
  );
};
