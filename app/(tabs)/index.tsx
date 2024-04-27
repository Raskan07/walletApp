import CardsList from '@/components/CardsComponents/CardsList';
import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <CardsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
