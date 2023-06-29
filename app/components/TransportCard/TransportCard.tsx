import { TouchableOpacity, ListRenderItemInfo, Text, StyleSheet } from 'react-native'
import { ITransport } from '../../store/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appUrls } from '../../routes/appUrls';

interface IProps {
  card: ListRenderItemInfo<ITransport>;
  navigation: NativeStackNavigationProp<any>;
}

export const TransportCard = ({ card, navigation }: IProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(appUrls.tranportDetails, { card })}
      style={styles.card}
    >
      <Text>Названия: {card.item.id}</Text>
      <Text>Имя водителя: {card.item.driver.name}</Text>
      <Text>Категория ТС: {card.item.category}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
});

