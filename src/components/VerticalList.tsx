import { Dimensions, FlatList, StyleSheet } from 'react-native';

import { AnimatedCard } from './AnimatedCard';
import { Item } from '../data/faker';

interface VerticalListProps {
  data: Item[];
}

const { height } = Dimensions.get('window');
const _spacing = 4;
const _itemSize = height * 0.72;

export function VerticalList({ data }: VerticalListProps) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.listContentContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <AnimatedCard item={item} itemSize={_itemSize} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContentContainer: {
    padding: _spacing * 3,
    gap: _spacing * 2,
  },
});
