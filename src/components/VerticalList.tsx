import { FlatList, StyleSheet } from 'react-native';

import { AnimatedCard } from './AnimatedCard';
import { Item } from '../data/faker';
import { itemFullSize, spacing } from '../helpers/constants';

interface VerticalListProps {
  data: Item[];
}

export function VerticalList({ data }: VerticalListProps) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.listContentContainer}
      keyExtractor={(item) => item.id}
      snapToInterval={itemFullSize}
      decelerationRate="fast"
      renderItem={({ item }) => <AnimatedCard item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  listContentContainer: {
    padding: spacing * 3,
    gap: spacing * 2,
  },
});
