import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function Map({ navigation }) {
  const [region, setRegion] = useState(initialRegion);
  const [showButton, setShowButton] = useState(false);
  return (
    <View className="flex-1 relative">
      <MapView
        className="flex-1 z-0"
        initialRegion={region}
        onPress={(e) => {
          setRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          setShowButton(true);
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          onDragEnd={(e) =>
            setRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            })
          }
        />
      </MapView>
      {showButton && (
        <TouchableOpacity
          className="mx-6"
          onPress={() => {
            navigation.navigate("Home", { region: region });
          }}
        >
          <View className="absolute bottom-10 flex-1 justify-center items-center bg-white w-full py-3">
            <Text>Go back</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
