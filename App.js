import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* partie1 */}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, flexDirection: "column" }}>
          <View style={{ flex: 3, backgroundColor: "purple" }} />
          <View style={{ flex: 1, backgroundColor: "yellow" }} />
          <View style={{ flex: 1, backgroundColor: "pink" }} />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 4, backgroundColor: "red" }} />
          <View style={{ flex: 1, backgroundColor: "blue" }} />
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 4, backgroundColor: "lightblue" }} />
          <View style={{ flex: 2, backgroundColor: "fuchsia" }} />
        </View>
      </View>
      {/* partie2 */}
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3, backgroundColor: "gray" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
