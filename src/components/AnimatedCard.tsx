import { View } from 'react-native';

import { Item } from '../data/faker';

interface AnimatedCardProps {
  item: Item;
  itemSize: number;
}

export function AnimatedCard({ item, itemSize }: AnimatedCardProps) {
  return (
    <View style={{ backgroundColor: item.bgColor, height: itemSize }}></View>
  );
}
