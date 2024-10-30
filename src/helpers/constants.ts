import { Dimensions } from 'react-native';

export const { height } = Dimensions.get('window');
export const spacing = 8;
export const itemSize = height * 0.72;
export const itemFullSize = itemSize + spacing * 2;
