import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    RegisterBuyerContainer: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 50,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 25,
        fontWeight: "500",
        color: "#45849f",
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        width: "100%",
    },
    registerButton: {
        backgroundColor: "#45849f",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
    },
    registerButtonText: {
        color: "white",
        fontSize: 16,
        marginLeft: 90,
    },
});

export default styles;
