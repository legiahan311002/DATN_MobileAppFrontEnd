import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        backgroundColor: "#ccc",
        flex: 1,
        paddingTop: 20,
    },
    accountName: {
        fontSize: 20,
        color: "#479b92",
        fontWeight: "500",
    },
    profileHeader: {
        gap: 10,
    },
    profileContent: {
        height: 300,
        marginTop: 300,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#fff",
        marginHorizontal: 20,
        borderRadius: 10,
    },
    order: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginVertical: 15,
        alignItems: "center",
    },
    icon: {
        opacity: 0.7,
        color: "#479b92",
    },
    orderTitle: {
        fontSize: 20,
        marginRight: 30,
        color: "#479b92",
    },
    line: {
        borderWidth: 0.3,
        borderColor: "#ccc",
        marginHorizontal: 10,
    },
});

export default styles;
