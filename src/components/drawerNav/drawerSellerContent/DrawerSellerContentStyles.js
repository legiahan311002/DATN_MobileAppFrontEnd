import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    marginTop: StatusBar.currentHeight,
  },
  itemContainer: {
    backgroundColor: "#eee",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
  },
});

export default styles;
