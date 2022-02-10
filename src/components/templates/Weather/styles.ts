import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from '../../atoms/Icon/Icon';
import { StyledText } from '../../atoms/typography';

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(16)}px;
  padding: ${RFValue(16)}px;
`;

export const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Title = styled(StyledText).attrs(({ theme }) => ({
  size: 'extraMedium',
  color: theme.colors.text_primary,
}))`
  margin-top: ${RFValue(30)}px;
`;

export const SmallText = styled(StyledText).attrs(({ theme }) => ({
  size: 'small',

  color: theme.colors.text_primary,
}))<{ withMargin?: boolean }>`
  ${({ withMargin }) =>
    withMargin &&
    css`
      margin: ${RFValue(32)}px 0 ${RFValue(32)}px;
    `}
`;

export const Degrees = styled(StyledText).attrs(({ theme }) => ({
  size: 'extraMedium',
  color: theme.colors.text_primary,
}))`
  margin-top: ${RFValue(32)}px;
`;
