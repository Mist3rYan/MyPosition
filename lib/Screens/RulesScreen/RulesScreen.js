import { View, Text, StyleSheet } from "react-native";
import i18n from "../../../i18n";

export default function RulesScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    text: {
      marginTop: 20,
      padding: 20,
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

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{i18n("rulesTitle")}:</Text>
      <Text style={styles.text}>{i18n("rules")}</Text>
    </View>
  );
}
