import { StyleSheet, View } from 'react-native';

import { VerticalList } from './components/VerticalList';
import data from './data/faker';

export function Main() {
  return (
    <View style={styles.container}>
      <VerticalList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
  },
});
