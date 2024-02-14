import * as Localization from "expo-localization";
import { IntlMessageFormat } from "intl-messageformat";

const locales = {
  "fr-FR": {
    latitude: "Latitude",
    longitude: "Longitude",
    altitude: "Altitude",
    getPosition: "Obtenir ma position",
    sharePosition: "Partager ma position",
    myPosition: "Ma position",
    home: "Accueil",
    rulesTitle: "Règles de confidentialité",
    permissions: "Permission d'accès à la position refusée",
    message: "Voici ma position GPS:",
    rules:
      "Cette application utilise la position de votre téléphone pour vous aider à partager votre position avec vos contact. Ces données ne sont pas stockées, ne sont pas utilisées à des fins commerciales et ne sont pas partagées avec des tiers par nous mêmes.",
  },
  "en-EN": {
    latitude: "Latitude",
    longitude: "Longitude",
    altitude: "Altitude",
    getPosition: "Get my position",
    sharePosition: "Share my position",
    myPosition: "My position",
    home: "Home",
    rulesTitle: "Privacy rules",
    permissions: "Permission to access location was denied",
    message: "Here is my GPS position:",
    rules:
      "This application uses your phone's location to help you share your location with your contact. This data is not stored, not used for commercial purposes and not shared with third parties by ourselves.",
  },
  "es-ES": {
    latitude: "Latitud",
    longitude: "Longitud",
    altitude: "Altitud",
    getPosition: "Obtener mi posición",
    sharePosition: "Compartir mi posición",
    myPosition: "Mi posición",
    home: "Inicio",
    rulesTitle: "Reglas de privacidad",
    permissions: "Permiso para acceder a la ubicación denegado",
    message: "Aquí está mi posición GPS:",
    rules:
      "Esta aplicación utiliza la ubicación de su teléfono para ayudarlo a compartir su ubicación con su contacto. Estos datos no se almacenan, no se utilizan con fines comerciales y no se comparten con terceros por nosotros mismos.",
  },
  "de-DE": {
    latitude: "Breitengrad",
    longitude: "Längengrad",
    altitude: "Höhe",
    getPosition: "Meine Position erhalten",
    sharePosition: "Meine Position teilen",
    myPosition: "Meine Position",
    home: "Zuhause",
    rulesTitle: "Datenschutzregeln",
    permissions: "Zugriff auf den Standort verweigert",
    message: "Hier ist meine GPS-Position:",
    rules:
      "Diese Anwendung verwendet den Standort Ihres Telefons, um Ihnen beim Teilen Ihres Standorts mit Ihrem Kontakt zu helfen. Diese Daten werden von uns nicht gespeichert, nicht für kommerzielle Zwecke verwendet und nicht von uns an Dritte weitergegeben.",
  },
};

const i18n = (messagesId, values) => {
  let locale = Localization.locale;
  if (locales[locale] === undefined) {
    locale = "en-EN";
  }
  const message = locales[locale][messagesId];
  const formatter = new IntlMessageFormat(message, locale);
  return formatter.format(values);
};

export default i18n;
