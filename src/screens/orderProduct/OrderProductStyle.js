import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor: "#fff",
        height: 1000,
    },
    address: {
        flexDirection: "row",
        alignItems: "center",
    },
    addressLeft: {
        marginTop: 50,
        marginLeft: 30,
    },
    addressRight: {
        marginTop: 50,
        marginLeft: 20,
    },

    addressContent: {
        marginLeft: 30,
        gap: 5,
    },
    info: {
        flexDirection: "row",
        gap: 20,
    },
    addressTitle: {
        fontSize: 20,
        fontWeight: "500",
    },
    infoName: {
        fontSize: 16,
    },
    infoPhone: {
        fontSize: 16,
    },
    addressText: {
        fontSize: 16,
    },
    line: {
        borderWidth: 0.5,
        borderColor: "#ccc",
    },

    productContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginTop: 20,
    },

    productRight: {
        gap: 10,
        width: 250,
    },

    img: {
        width: 80,
        height: 80,
        marginLeft: 20,
    },
    productName: {
        fontSize: 16,
    },
    productPrice: {
        fontSize: 16,
    },

    deliveryProduct: {
        height: 180,
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: "#f6fffe",
        borderColor: "#479b92",
    },
    title: {
        fontSize: 15,
        color: "#479b92",
        marginLeft: 20,
        marginVertical: 10,
    },
    lineDeli: {
        borderWidth: 0.2,
        borderColor: "#479b92",
    },
    methodDeli: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 10,
        justifyContent: "space-between",
    },
    textMethod: {
        fontSize: 15,
    },
    textPrice: {
        fontSize: 15,
        marginRight: 20,
    },
    dayReceive: {
        color: "#ccc",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20,
    },
    textDetail: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20,
        color: "#479b92",
    },

    countPriceProduct: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    countTitle: {
        fontSize: 15,
    },
    countPrice: {
        color: "tomato",
        fontSize: 15,
    },
    quantitySize: {
        flexDirection: "row",
        gap: 10,
    },
    paymentProduct: {
        gap: 10,
    },
    paymentMethod: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    paymentTitle: {
        fontSize: 15,
    },
    paymentDetail: {
        flexDirection: "row",
        gap: 10,
        marginRight: 15,
        width: 100,
        alignItems: "center",
    },

    paymentProductTitle: {
        fontSize: 15,
        marginLeft: 20,
    },
    paymentProductDetail: {
        marginLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 10,
    },
    paymentProductDetailText: {
        color: "#767272",
    },
    countPayment: {
        flexDirection: "row",
        marginLeft: 20,
        justifyContent: "space-between",
        marginRight: 10,
        alignItems: "center",
    },
    rules: {
        fontSize: 15,
        marginHorizontal: 20,
        paddingVertical: 10,
    },

    paymentButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
        marginTop: 20,
    },

    paymentText: {
        fontSize: 16,
    },
    paymentPriceButton: {
        color: "tomato",
        fontWeight: "500",
    },
    btnPayment: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginRight: 10,
        backgroundColor: "tomato",
        borderRadius: 10,
    },
    btnTextPayment: {
        color: "#fff",
        fontWeight: "500",
    },
});

export default styles;
