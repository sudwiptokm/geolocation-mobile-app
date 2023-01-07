import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Home({ route, navigation }) {
  let region: any;
  if (route.params.region) {
    region = route.params.region;
  }
  const [val, setVal] = useState("");
  useEffect(() => {
    if (region) {
      setVal(region.latitude + ", " + region.longitude);
    }
  }, [region]);
  return (
    <View className="flex-1 items-center pt-10 bg-white">
      <View className="px-10">
        <TextInput
          className="mt-10 w-[360px] border border-gray-600 px-4 py-2 rounded bg-white"
          placeholder="Loading"
          onFocus={() => {
            navigation.navigate("Map");
          }}
          value={val}
        />
        {/* <Button title="Go to Map" onPress={() => navigation.navigate("Map")} /> */}
      </View>
    </View>
  );
}
