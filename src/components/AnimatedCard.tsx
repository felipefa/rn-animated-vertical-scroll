import { Image, StyleSheet, Text, View } from 'react-native';

import { Item } from '../data/faker';
import { itemSize, spacing } from '../helpers/constants';

interface AnimatedCardProps {
  item: Item;
}

export function AnimatedCard({ item }: AnimatedCardProps) {
  return (
    <View style={[{ height: itemSize }, styles.container]}>
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
    </View>
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
    borderRadius: 12,
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
