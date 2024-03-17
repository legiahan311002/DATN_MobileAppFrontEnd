import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("window").height,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#fff",
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
});

export default styles;
