import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 60,
    },
    paymentItem: {
        flexDirection: "row",
        marginTop: 20,
        borderWidth: 0.2,
        padding: 10,
        alignItems: "center",
        gap: 30,
    },
    titleItem: {
        marginRight: 30,
        fontSize: 15,
    },
    btnAgree: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: "tomato",
        marginTop: 400,
    },
    textArgee: {
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
    },
});

export default styles;
