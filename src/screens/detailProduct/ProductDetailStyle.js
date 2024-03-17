import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    productInfo: {
        flex: 1,
    },
    productDetail: {
        paddingLeft: 15,
    },
    image: {
        width: "auto",
        height: 350,
    },
    productName: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    productPrice: {
        fontSize: 15,
        color: "tomato",
        fontWeight: "500",
        paddingBottom: 10,
    },
    buyContainer: {
        flex: 1,
        left: 190,
    },
    btnBuy: {
        backgroundColor: "tomato",
        padding: 15,
        borderRadius: 10,
        marginTop: 300,
        alignItems: "center",
        width: 150,
    },
    btnTextBuy: {
        color: "#fff",
        fontWeight: "500",
    },
    productStar: {
        flexDirection: "row",
        gap: 10,
    },
    iconStar: {
        flexDirection: "row",
        gap: 3,
    },
    line: {
        borderWidth: 0.5,
    },
    productShop: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 20,
    },
    imgShop: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    btnShop: {
        borderWidth: 1,
        borderColor: "tomato",
        padding: 10,
    },
    btnTextShop: {
        color: "tomato",
    },
    shopInfo: {
        flexDirection: "column",
        width: 150,
        gap: 3,
    },
    addressShop: {
        flexDirection: "row",
        gap: 5,
    },
});

export default styles;
