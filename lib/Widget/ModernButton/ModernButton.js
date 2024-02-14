import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ModernButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff3300", // Couleur de fond du bouton
    paddingVertical: 12, // Espacement vertical à l'intérieur du bouton
    paddingHorizontal: 24, // Espacement horizontal à l'intérieur du bouton
    borderRadius: 8, // Bord arrondi du bouton
    alignItems: "center", // Alignement du contenu au centre
  },
  buttonText: {
    color: "#FFFFFF", // Couleur du texte du bouton
    fontSize: 16, // Taille de la police du texte
    fontWeight: "bold", // Gras
  },
});

export default ModernButton;
