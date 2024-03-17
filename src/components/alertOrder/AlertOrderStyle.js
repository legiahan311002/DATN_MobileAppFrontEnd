import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    content: {
        backgroundColor: "#fff",
        padding: 20,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        flex: 0.5,
    },
    contentHeader: {
        flexDirection: "row",
    },
    priceProduct: {
        justifyContent: "flex-end",
        gap: 6,
        marginLeft: 10,
    },

    img: {
        width: 100,
        height: 100,
    },

    closeModalText: {
        fontSize: 18,
        color: "#000",
        marginBottom: 10,
        left: 250,
    },

    textPrice: {
        color: "tomato",
        fontSize: 15,
    },
    line: {
        borderWidth: 0.5,
        marginVertical: 10,
    },
    contentQuantity: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputQuantity: {
        flexDirection: "row",
    },
    button: {
        borderWidth: 1,
        paddingHorizontal: 14,
        textAlign: "center",
    },
    buttonText: {
        fontSize: 20,
    },
    input: {
        borderWidth: 1,
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 10,
    },

    btnOrder: {
        backgroundColor: "tomato",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30,
    },
    btnOrderText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "500",
    },
    overlay: {
        flex: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu đen với độ trong suốt
    },

    dropdownSize: {
        width: 100,
        marginTop: 10,
    },
});

export default styles;
