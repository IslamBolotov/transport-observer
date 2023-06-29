import { TouchableOpacity, Linking, View, StyleSheet, Text } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { appUrls } from '../../routes/appUrls';

const preMessage = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе!'

export const TransportDetails= ({ route, navigation }: any) => {
  const { card } = route.params;
  const links = {
    telephone: `tel:${card.item.driver.phone_number}`,
    whatsapp: `https://wa.me/${card.item.driver.phone_number}?text=${encodeURIComponent(preMessage)}`
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };
  
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.mapBtn}
        onPress={() => navigation.navigate(appUrls.map, { card })}
      ><Text style={styles.btnText}>Посмотреть на карте</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.text}>Категория ТС: {card.item.category}</Text>
        <Text style={styles.text}>Имя водителя: {card.item.driver.name}</Text>
        <Text style={styles.text}>Контактный номер водителя: {card.item.driver.phone_number}</Text>
      </View>
      <TouchableOpacity
        style={styles.mapBtn}
        onPress={() => openLink(links.telephone)}
      ><Text style={styles.btnText}>Позвонить</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mapBtn}
        onPress={() => openLink(links.whatsapp)}
      ><Text style={styles.btnText}>Написать</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  mapBtn: {
    width: 250,
    backgroundColor: 'blue',
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  card: {
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 15,
  }
});