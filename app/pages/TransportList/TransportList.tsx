import { useEffect, useState } from 'react'
import { TouchableOpacity, FlatList, ListRenderItemInfo, StyleSheet, Text } from "react-native"
import { TransportCard } from "../../components/TransportCard"
import { observer } from "mobx-react-lite"
import { store } from '../../store/store';
import { ITransport } from '../../store/types';
import { CheckBox } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appUrls } from '../../routes/appUrls';

export interface ICategory {
  title: string;
  name: string;
}

export interface IProps {
  navigation: NativeStackNavigationProp<any>
}

const categories: ICategory[] = [
  {
    title: 'Грузовой',
    name: 'truck'
  },
  {
    title: 'Пассажирский',
    name: 'passenger'
  },
  {
    title: 'Спецтранспорт',
    name: 'special'
  },
];

export const TransportList = observer(({ navigation }: IProps) => {
  const {
    getTransportList,
    transports,
    setFilterName,
    filters,
    setFilteredTransports,
    filteredTransports
  } = store;

  useEffect(() => {
    getTransportList()
  }, []);
  
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.filter}>
        {categories.map((item) => (
          <CheckBox
            title={item.title}
            key={item.name}
            checked={filters.includes(item.name)}
            onPress={() => setFilterName(item.name)}
          />
        ))}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={setFilteredTransports}
      ><Text style={styles.btnText}>Применить</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mapBtn}
        onPress={() => navigation.navigate(appUrls.map)}
      ><Text style={styles.btnText}>Посмотреть на карте</Text>
      </TouchableOpacity>
      <FlatList
        nestedScrollEnabled={true}
        contentContainerStyle={styles.list}
        data={filteredTransports}
        renderItem={(item: ListRenderItemInfo<ITransport>) => <TransportCard card={item} navigation={navigation} />}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  )
});

const styles = StyleSheet.create({
  filter: {
    width: 200,
  },
  btn: {
    width: 150,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    padding: 10,
    borderRadius: 5,
  },
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
  list: {
    flexGrow: 0,
    minHeight: '120%'
  }
});