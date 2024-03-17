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
    marginHorizontal: 10,
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

  //content
  cateMain: {
    paddingVertical: 15,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  category: {
    backgroundColor: "#eee",
    paddingBottom: 15,
  },
  category_item: {
    backgroundColor: "wheat",
    width: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 8,
  },
  prod_cont: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cate_item_icon: {
    borderWidth: 2,
    borderRadius: 8,

    padding: 1,
  },

  product_item: {
    width: "46%",
    margin: "2%",
    height: "auto",
    // backgroundColor: 'green',
    borderWidth: 1,
    flexDirection: "column",
    borderRadius: 15,
    padding: 10,
    overflow: "hidden",
    // maxHeight: 260,
  },
  prod_img_cont: {
    overflow: "hidden",
    maxHeight: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  prod_image: {
    width: "100%",
    height: 150,
  },
  cate_item_title: {
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10,
  },
  bar_container: {
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  barsIconContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  barsIcon: {
    padding: 12,
    fontSize: 24,
  },
});

export default styles;
