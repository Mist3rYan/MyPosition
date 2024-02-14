import { StyleSheet, Text, View, Button, Share } from "react-native";
import React, { useEffect } from "react";
import * as Location from "expo-location";
import ModernButton from "../../Widget/ModernButton/ModernButton";
import i18n from "../../../i18n";

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    text: {
      marginTop: 20,
      fontSize: 20,
      marginBottom: 100,
    },
    textTitle: {
      marginTop: 50,
      fontSize: 24,
      fontWeight: "bold",
      color: "#ff3300",
      marginBottom: 20,
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
      setErrorMsg(i18n("permissions"));
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
          i18n("message") +
          `\n` +
          i18n("latitude") +
          ` : ` +
          latitude +
          `\n` +
          i18n("longitude") +
          ` : ` +
          longitude +
          `\n` +
          i18n("altitude") +
          ` : ` +
          altitude +
          `\nhttps://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
      });
    } catch (error) {
      alert(error.message);
    }
  }

  let text = i18n("getPosition");
  let PositonText = i18n("myPosition");
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    altitude = location.coords.altitude;
    text =
      i18n("latitude") +
      ` : ` +
      latitude +
      `\n` +
      i18n("longitude") +
      ` : ` +
      longitude +
      `\n` +
      i18n("altitude") +
      ` : ` +
      altitude;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{PositonText}</Text>
      <Text style={styles.text}>{text}</Text>
      {/* Utilisation du bouton moderne */}
      <ModernButton onPress={sharedPositon} title={i18n("sharePosition")} />
    </View>
  );
}
