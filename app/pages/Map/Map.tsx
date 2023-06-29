import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { store } from '../../store/store';
import { ITransport } from '../../store/types';

interface Auto {
  id: number;
  latitude: number;
  longitude: number;
}

export const Map: React.FC = observer(({ route }: any) => {
  const { filteredTransports } = store;

  const icons = {
    passenger: require('../../assets/icons/passenger.png'),
    special: require('../../assets/icons/special.png'),
    truck: require('../../assets/icons/truck.png'),
  }

  const markers = useMemo(() => {
    if (route.params?.card?.item) {
      return [route.params?.card?.item as ITransport] 
    }
    return filteredTransports;
  }, [route, filteredTransports]);

  const initialRegion: Region = {
    latitude: markers?.[0].coordinate.latitude || 42.875024,
    longitude: markers?.[0].coordinate.longitude || 74.571552,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialRegion}
      >
        {markers.map((auto) => (
          <Marker
            key={auto.id}
            coordinate={{ latitude: auto.coordinate.latitude, longitude: auto.coordinate.longitude }}
            title={auto.id}
            icon={icons[auto.category]}
            style={{ width: 10, height: 20 }}
          />
        ))}
      </MapView>
    </View>
  );
});