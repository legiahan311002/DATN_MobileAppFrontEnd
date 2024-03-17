import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  top_section: {
    backgroundColor: "tomato",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  search_container: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 15,
    paddingHorizontal: 5,
    marginHorizontal: 40,
  },
  // search_input: {
  //   flexGrow: 1,
  // },
  cart: {
    position: "relative",
    backgroundColor: "transparent",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#e3e3e3",
  },
  item_cart_numb: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    opacity: 0.7,
    borderWidth: 1,
  },

  content: {
    flex: 1,
    backgroundColor: "#e6eaed",
    padding: 15,
  },
  category: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cateItem: {
    margin: "1%",
    width: "31%",
    backgroundColor: "#fff",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  cateItemTitle: {
    textAlign: "center",
  },
  newOrderContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: 10,
    flex: 1,
  },
  orderTitle: {
    opacity: 0.7,
  },

  orderItem: {
    margin: "1%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 5,
  },
  orderNameCont: {
    flex: 1,
    // marginHorizontal: 0,
  },
  name: {
    fontSize: 17,
    fontWeight: "800",
  },
  btnRejectCont: {
    padding: 5,
    backgroundColor: "#efe2e3",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  btnAcceptCont: {
    backgroundColor: "#e3f0e9",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },

  nameShop: {
    color: "#fff",
    fontWeight: "700",
  },
  orderTitleCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ordersReloadCont: {
    backgroundColor: "#eee",
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 15,
  },
});

export default styles;
