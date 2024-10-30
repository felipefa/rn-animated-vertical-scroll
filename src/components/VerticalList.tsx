import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { AnimatedCard } from './AnimatedCard';
import { Item } from '../data/faker';
import { screenHeight, itemFullSize, spacing } from '../helpers/constants';

interface VerticalListProps {
  data: Item[];
}

export function VerticalList({ data }: VerticalListProps) {
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y / itemFullSize;
  });

  return (
    <Animated.FlatList
      data={data}
      contentContainerStyle={styles.listContentContainer}
      keyExtractor={(item) => item.id}
      snapToInterval={itemFullSize}
      decelerationRate="fast"
      onScroll={onScroll}
      scrollEventThrottle={16} // 1000 / 60 (fps)
      renderItem={({ item, index }) => (
        <AnimatedCard item={item} index={index} scrollY={scrollY} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContentContainer: {
    paddingHorizontal: spacing * 3,
    paddingVertical: (screenHeight - itemFullSize) / 2,
    gap: spacing * 2,
  },
});
