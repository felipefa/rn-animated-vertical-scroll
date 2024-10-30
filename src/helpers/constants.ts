import { Dimensions } from 'react-native';

export const { height: screenHeight } = Dimensions.get('screen');
export const spacing = 8;
export const itemSize = screenHeight * 0.72;
export const itemFullSize = itemSize + spacing * 2;
