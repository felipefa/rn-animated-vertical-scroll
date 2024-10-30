import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { Item } from '../data/faker';
import { itemSize, spacing } from '../helpers/constants';

interface AnimatedCardProps {
  item: Item;
  index: number;
  scrollY: SharedValue<number>;
}

export function AnimatedCard({ item, index, scrollY }: AnimatedCardProps) {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [index - 1, index, index + 1],
        [0.3, 1, 0.3]
      ),
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [index - 1, index, index + 1],
            [0.92, 1, 0.92]
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[{ height: itemSize }, styles.container, animatedStyles]}
    >
      <Image
        source={{ uri: item.image }}
        style={[StyleSheet.absoluteFillObject, styles.bgimage]}
        blurRadius={50}
      />
      <Image
        source={{ uri: item.image }}
        style={[{ height: itemSize * 0.4 }, styles.image]}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {item.description}
        </Text>
      </View>
      <View style={styles.authorContainer}>
        <Image source={{ uri: item.author.avatar }} style={styles.avatar} />
        <Text numberOfLines={1} style={styles.authorName}>
          {item.author.name}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing * 2,
    borderRadius: 8,
    gap: spacing,
  },
  bgimage: {
    borderRadius: 12,
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
  textContainer: {
    gap: spacing,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#eee',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing,
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 12,
    width: 24,
  },
  authorName: {
    fontSize: 12,
    color: '#eee',
  },
});
