import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("window").height,
        marginTop: StatusBar.currentHeight,
    },
    addContainer: {
        flex: 1,
        backgroundColor: "#e6eaed",
        padding: 15,
    },
    topSection: {
        backgroundColor: "tomato",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "500",
    },
    addInfo: {
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 10,
    },
    typeTitle: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    cateInput: {
        borderBottomWidth: 1,
        height: 50,
    },
    btnAdd: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 25,
    },
    btnText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "500",
    },
    btnBack: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    colorRed: {
        color: "red",
    },
    textInput: {
        height: 35,
        borderBottomWidth: 1,
    },
    drop1: {
        zIndex: 10,
    },
    cateContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        paddingVertical: 20,
        borderRadius: 15,
    },
    fixHeight: {
        height: 340,
    },

    itemContainer: {
        width: "50%",
        paddingHorizontal: 10,
    },
    colorContainer: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
    },
    colorOption: {
        flexDirection: "row",
        alignItems: "center",
    },
    btnAddColor: {
        borderRadius: 15,
        marginVertical: 10,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    textAddColor: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    prodInfoContainer: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        marginTop: 15,
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
        marginHorizontal: 7,
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
    btnCreate: {
        margin: 20,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    },
});

export default styles;
