import { StyleSheet, Text, View, Button, Share } from "react-native";
import React, { useEffect } from "react";
import * as Location from "expo-location";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      marginTop: 100,
      fontSize: 20,
      marginBottom: 100,
    },
  });

  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  let latitude = null;
  let longitude = null;
  let altitude = null;

  async function getUserLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let locationCurrent = await Location.getCurrentPositionAsync({});
    setLocation(locationCurrent);
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  async function sharedPositon() {
    try {
      await Share.share({
        message:
          `Au secour ! Voici ma position.` +
          `\nLatitude: ${latitude}, Longitude: ${longitude}, Altitude: ${altitude}` +
          `\nhttps://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
      });
    } catch (error) {
      alert(error.message);
    }
  }

  let text = "Click to share your position";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    altitude = location.coords.altitude;
    text =
      `Latitude: ${latitude}` +
      `\n Longitude: ${longitude}` +
      `\n Altitude: ${altitude}`;
  }

  return (
    <View style={styles.container}>
      <Button title="Share my position" onPress={sharedPositon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
