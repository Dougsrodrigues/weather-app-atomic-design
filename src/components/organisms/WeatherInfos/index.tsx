import React, { FC } from 'react';
import { Row } from '../../atoms/Row';
import { WeatherInfo } from '../../molecules/WeatherInfo';

export const WeatherInfos: FC = () => {
  return (
    <Row>
      <WeatherInfo type="Temp" value="26c" />
      <WeatherInfo type="Umidade" value="26c" />
      <WeatherInfo type="Vento" value="26c" />
    </Row>
  );
};
