import { StyleSheet } from "react-native";

import { Text, View, TextInput } from "../../components/Themed";

export default function questions() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.Input}>Home page</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
